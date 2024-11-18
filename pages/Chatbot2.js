import React, { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import { createClient } from "@supabase/supabase-js";
import stringSimilarity from "string-similarity";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Google AI



const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");
    const [newKeywords, setNewKeywords] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { data, error } = await supabase.from("faqs").select("*");
                if (error) throw error;
                setFaqs(data || []);
            } catch (error) {
                console.error("Error fetching FAQs:", error.message);
            }
        };

        fetchFaqs();
    }, []);

    const handleSendMessage = async () => {
        if (!query.trim()) return;

        setMessages(prev => [...prev, { sender: "user", text: query }]);
        setIsLoading(true);

        try {
            // First check FAQ database
            const matchingFaq = findMatchingFaq(query);
            if (matchingFaq) {
                setMessages(prev => [...prev, { sender: "bot", text: matchingFaq.answer }]);
            } else {
                // If no FAQ match, use Gemini
                const result = await model.generateContent({
                    text: query
                });

                const response = await result.response;
                const text = response.text;

                setMessages(prev => [...prev, { sender: "bot", text }]);
            }
        } catch (error) {
            console.error("Error generating response:", error);
            setMessages(prev => [...prev, {
                sender: "bot",
                text: "I encountered an error processing your request. Please try again."
            }]);
        } finally {
            setIsLoading(false);
            setQuery("");
        }
    };

    const findMatchingFaq = (userQuery) => {
        if (!faqs.length) return null;

        const questions = faqs.map(faq => faq.question);
        const { bestMatch } = stringSimilarity.findBestMatch(userQuery.toLowerCase(), questions);

        if (bestMatch.rating > 0.6) {
            const matchedFaq = faqs.find(faq => faq.question === bestMatch.target);
            const queryKeywords = userQuery.toLowerCase().split(" ");
            const faqKeywords = matchedFaq.keywords.map(k => k.toLowerCase());

            const hasMatchingKeywords = queryKeywords.some(keyword =>
                faqKeywords.some(faqKeyword => faqKeyword.includes(keyword))
            );

            if (hasMatchingKeywords) {
                return matchedFaq;
            }
        }
        return null;
    };

    const handleSubmitQuestion = async () => {
        if (!newQuestion.trim() || !newAnswer.trim() || !newKeywords.trim() || !isAgreed) {
            alert("Please fill out all fields and agree to the terms.");
            return;
        }

        try {
            const keywordsArray = newKeywords
                .split(",")
                .map(keyword => keyword.trim())
                .filter(keyword => keyword.length > 0);

            const { error } = await supabase
                .from("faqs")
                .insert([{
                    question: newQuestion.trim(),
                    answer: newAnswer.trim(),
                    keywords: keywordsArray
                }]);

            if (error) throw error;

            alert("Question submitted successfully!");
            setNewQuestion("");
            setNewAnswer("");
            setNewKeywords("");
            setIsAgreed(false);
        } catch (error) {
            console.error("Error submitting question:", error);
            alert("Failed to submit question. Please try again.");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex flex-col items-center bg-gray-50 p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-96 p-4 overflow-y-auto bg-gray-50 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[70%] p-3 rounded-lg ${
                                    msg.sender === "user"
                                        ? "ml-auto bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="text-center text-gray-500">
                                Thinking...
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type your question..."
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isLoading}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 bg-white">
                <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Submit a Question</h3>
                    <textarea
                        placeholder="Enter your question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-full h-24 p-2 mb-4 border rounded-lg resize-none"
                    />
                    <textarea
                        placeholder="Enter the expected answer"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        className="w-full h-24 p-2 mb-4 border rounded-lg resize-none"
                    />
                    <textarea
                        placeholder="Enter comma-separated keywords (e.g., 'payment, method')"
                        value={newKeywords}
                        onChange={(e) => setNewKeywords(e.target.value)}
                        className="w-full h-24 p-2 mb-4 border rounded-lg resize-none"
                    />
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-600">
                            I agree that Ritesh (admin) reserves the right to remove any inappropriate submissions.
                        </label>
                    </div>
                    <button
                        onClick={handleSubmitQuestion}
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;