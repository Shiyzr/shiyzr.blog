---
title: "手搓LLM实录2"
date: "2/16/2026"
author: "Shiyzr"
tags: ["ai"]
readTime: "0 min read"
excerpt: "cs336破防实录"
---
## 流程回顾
1. 先搞到一堆训练数据（正常人话就行）。
2. 选一套切分方案（比如 BPE，或者别的 tokenizer），根据这套方案，构建一个词汇表，用来把 token（字符串形式）映射到一个个整数 ID。
3. 用词表和 tokenizer 把原始文本啃一遍，变成一长串 ID 序列。
4. 把这些 ID 序列丢给模型（例如一个 Transformer），反复训练，最后得到一个“见过世面”的语言模型。
   
## 完成了前三步，接下来是重头戏 -- Transformer训练
