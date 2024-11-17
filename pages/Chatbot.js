import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";
import { MDXProvider } from "@mdx-js/react";
import stringSimilarity from "string-similarity";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]); // To store chat messages
    const [faqs, setFaqs] = useState([]); // To store all FAQs
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");
    const [newKeywords, setNewKeywords] = useState(""); // To store new keywords
    const [isAgreed, setIsAgreed] = useState(false);

    // Fetch all FAQs from Supabase when the component mounts
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { data, error } = await supabase.from("faqs").select("*");
                if (error) {
                    console.error("Error fetching data:", error);
                } else {
                    setFaqs(data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchFaqs();
    }, []);

    // Function to handle user query
    const handleSendMessage = () => {
        if (query.trim() === "") return;

        // Add user message to the chat
        setMessages((prevMessages) => [...prevMessages, { sender: "user", text: query }]);

        // Extract keywords from the query
        const queryKeywords = query.toLowerCase().split(" ").map(word => word.trim());

        // Search for similar questions locally using string-similarity and keyword matching
        const questions = faqs.map(faq => faq.question);
        const bestMatch = stringSimilarity.findBestMatch(query, questions).bestMatch;

        let bestFaq = null;
        if (bestMatch.rating > 0.5) { // You can adjust the threshold as needed
            bestFaq = faqs.find(faq => faq.question === bestMatch.target);
        }

        if (bestFaq) {
            // Check keyword matching
            const faqKeywords = bestFaq.keywords.map(keyword => keyword.toLowerCase());
            const commonKeywords = queryKeywords.filter(keyword => faqKeywords.includes(keyword));
            if (commonKeywords.length > 0) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "bot", text: bestFaq.answer },
                ]);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "bot", text: "I don't have an answer for that right now." },
                ]);
            }
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "I don't have an answer for that right now." },
            ]);
        }

        setQuery(""); // Clear the input box
    };

    // Handle submission of new question, answer, and keywords
    const handleSubmitQuestion = async () => {
        if (!newQuestion.trim() || !newAnswer.trim() || !newKeywords.trim() || !isAgreed) {
            alert("Please fill out all fields and agree to the terms.");
            return;
        }

        // Convert the keywords string into an array
        const keywordsArray = newKeywords.split(",").map((keyword) => keyword.trim());

        try {
            const { data, error } = await supabase
                .from("faqs")
                .insert([{ question: newQuestion, answer: newAnswer, keywords: keywordsArray }]);

            if (error) {
                console.error("Error inserting data:", error);
                alert("Failed to submit the question.");
            } else {
                alert("Question submitted successfully and will be reviewed by the admin.");
                setNewQuestion("");
                setNewAnswer("");
                setNewKeywords("");
                setIsAgreed(false);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting your question.");
        }
    };

    // Handle Enter key for sending messages
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <MDXProvider>
            <Container>
                <LeftPane>
                    <ChatWindow>
                        <ChatMessages>
                            {messages.map((msg, index) => (
                                <Message key={index} $sender={msg.sender}>
                                    {msg.text}
                                </Message>
                            ))}
                        </ChatMessages>
                        <ChatInputWrapper>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </ChatInputWrapper>
                    </ChatWindow>
                </LeftPane>
                <RightPane>
                    <SubmissionForm>
                        <h3>Submit a Question</h3>
                        <textarea
                            placeholder="Enter your question"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                        <textarea
                            placeholder="Enter the expected answer"
                            value={newAnswer}
                            onChange={(e) => setNewAnswer(e.target.value)}
                        />
                        <textarea
                            placeholder="Enter comma-separated keywords (e.g., 'payment, method')"
                            value={newKeywords}
                            onChange={(e) => setNewKeywords(e.target.value)}
                        />
                        <CheckboxWrapper>
                            <input
                                type="checkbox"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                            <label>
                                I agree that Ritesh (admin) reserves the right to remove any inappropriate
                                submissions.
                            </label>
                        </CheckboxWrapper>
                        <button onClick={handleSubmitQuestion}>Submit</button>
                    </SubmissionForm>
                </RightPane>
            </Container>
        </MDXProvider>
    );
};

// Styled components (remaining the same)
const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const LeftPane = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
`;

const RightPane = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
`;

const ChatWindow = styled.div`
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        max-width: 100%;
        max-height: 300px;
    }
`;

const ChatMessages = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #f0f0f0;
`;

const Message = styled.div`
    align-self: ${(props) => (props.$sender === "user" ? "flex-end" : "flex-start")};
    background: ${(props) => (props.$sender === "user" ? "#d1e7dd" : "#e2e3e5")};
    color: #000;
    padding: 8px 12px;
    border-radius: 15px;
    max-width: 70%;
    word-wrap: break-word;
`;

const ChatInputWrapper = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    border-top: 1px solid #ccc;

    input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
        background: #f9f9f9;
        color: #000;
    }

    button {
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background: #007bff;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background: #0056b3;
    }
`;

const SubmissionForm = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    textarea {
        width: 100%;
        height: 80px;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        color: #333;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
    }

    button:hover {
        background-color: #0056b3;
    }
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    input {
        margin-right: 10px;
    }
`;

export default Chatbot;