"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, User, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteContent } from "@/lib/content";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente de automatización. ¿En qué puedo ayudarte? Pregúntame sobre precios, implementación, tiempos o soporte.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: trimmed,
      sender: 'user',
      timestamp: new Date(),
    };

    const historyPayload = [...messages, userMessage].map(({ sender, text }) => ({ sender, text }));

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const replyText =
        typeof data.reply === 'string' && data.reply.trim().length > 0
          ? data.reply
          : 'Lo siento, no pude procesar la respuesta en este momento.';

      const botMessage: Message = {
        id: crypto.randomUUID(),
        text: replyText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat request failed', error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        text: 'Tuvimos un problema al contactar al asistente. Intenta de nuevo en unos momentos.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-4 z-30 sm:right-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-brand-600 hover:bg-brand-500 text-white p-4 rounded-full shadow-xl hover:shadow-brand-600/25 transition-all duration-300 hover:scale-105 group"
          aria-label="Abrir chat asistente"
          aria-expanded={isOpen}
        >
          <User className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="fixed bottom-6 right-4 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] sm:right-6"
              onKeyDown={handleKeyDown}
            >
              <Card className="h-full bg-brand-900/95 backdrop-blur-lg border-brand-600/30 shadow-2xl rounded-2xl overflow-hidden">
                {/* Header */}
                <CardHeader className="border-b border-brand-700/50 bg-brand-800/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8 bg-brand-600">
                        <AvatarFallback className="bg-brand-600 text-white text-sm">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-white text-sm font-semibold">
                          {siteContent.chat.title}
                        </CardTitle>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-xs text-white/60">En línea</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => setIsOpen(false)}
                      variant="ghost"
                      size="icon"
                      className="text-white/60 hover:text-white hover:bg-brand-700/50 h-8 w-8 rounded-full"
                      aria-label="Cerrar chat"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-hidden p-0">
                  <div className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-brand-600 text-white rounded-br-md'
                            : 'bg-brand-700/50 text-white/90 rounded-bl-md'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p className="text-xs opacity-60 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-brand-700/50 text-white/90 p-3 rounded-2xl rounded-bl-md">
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-white/60 rounded-full"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="border-t border-brand-700/50 p-4 bg-brand-800/30">
                    <form onSubmit={handleSubmit} className="flex space-x-2">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={siteContent.chat.placeholder}
                        className="flex-1 bg-white/10 border border-brand-600/40 text-white placeholder:text-white/70 focus-visible:ring-brand-500 focus-visible:ring-offset-0 focus-visible:outline-none rounded-xl"
                      />
                      <Button
                        type="submit"
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-brand-600 hover:bg-brand-500 text-white p-2 rounded-xl shadow-lg hover:shadow-brand-600/25 transition-all duration-200"
                        aria-label="Enviar mensaje"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

