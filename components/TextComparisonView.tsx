"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { diffChars } from "diff";

interface TextComparisonViewProps {
  text1: string;
  text2: string;
}

interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

export default function TextComparisonView({ text1, text2 }: TextComparisonViewProps) {
  const [differences, setDifferences] = useState<DiffPart[]>([]);

  useEffect(() => {
    const diff = diffChars(text1, text2);
    setDifferences(diff);
  }, [text1, text2]);

  const renderDiff = (diffs: DiffPart[], isOriginal: boolean) => {
    return diffs.map((part, index) => {
      if (isOriginal) {
        // For original text, show removed parts in red and unchanged in normal
        if (part.removed) {
          return (
            <span key={index} className="bg-red-100 text-red-800">
              {part.value}
            </span>
          );
        } else if (!part.added) {
          return <span key={index}>{part.value}</span>;
        }
        return null;
      } else {
        // For new text, show added parts in green and unchanged in normal
        if (part.added) {
          return (
            <span key={index} className="bg-green-100 text-green-800">
              {part.value}
            </span>
          );
        } else if (!part.removed) {
          return <span key={index}>{part.value}</span>;
        }
        return null;
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">对比结果</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            原文（删除内容）
          </h3>
          <div className="whitespace-pre-wrap">
            {renderDiff(differences, true)}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            新文（新增内容）
          </h3>
          <div className="whitespace-pre-wrap">
            {renderDiff(differences, false)}
          </div>
        </Card>
      </div>
    </div>
  );
}