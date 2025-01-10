"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight } from "lucide-react";
import TextComparisonView from "@/components/TextComparisonView";

export default function Home() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  return (
    <main className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">文案对比工具</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">原文</h2>
          <Textarea
            className="min-h-[300px] mb-2"
            placeholder="请输入原始文本..."
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">新文</h2>
          <Textarea
            className="min-h-[300px] mb-2"
            placeholder="请输入需要对比的文本..."
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
        </Card>
      </div>

      <div className="flex justify-center mt-6 mb-8">
        <Button
          onClick={() => setShowComparison(true)}
          className="gap-2"
          size="lg"
        >
          <ArrowLeftRight className="w-4 h-4" />
          对比文本
        </Button>
      </div>

      {showComparison && text1 && text2 && (
        <TextComparisonView text1={text1} text2={text2} />
      )}
    </main>
  );
}