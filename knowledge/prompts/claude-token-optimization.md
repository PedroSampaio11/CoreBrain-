# 💎 Claude Token Optimization & Assertiveness Guide

Este guia define o padrão de interação de alta densidade para o Claude (3.5 Sonnet / 3 Opus), focado em reduzir custos e maximizar a precisão técnica.

## 🚀 Princípios de Assertividade
1.  **Direct-to-Code**: Pule explicações sobre o que o código faz, a menos que haja uma lógica não óbvia. O código deve ser auto-explicativo.
2.  **No Conversational Filler**: Elimine frases como "Com certeza!", "Aqui está a solução", "Espero que ajude".
3.  **Technical Precision**: Use termos como "Idempotência", "Hydration", "RLS", "Memoization" em vez de explicações longas.

## 📉 Estratégias de Economia de Tokens

### 1. XML Tagging para Cache
O Claude cobra menos para processar blocos que ele já viu (Caching). Estruture o prompt assim:
```xml
<context>
[Arquivos do projeto ou regras de negócio]
</context>
<task>
[O que deve ser feito agora]
</task>
```
*Dica: Mantenha o `<context>` estável durante a sessão.*

### 2. Diff-Only Responses
Em vez de reescrever um arquivo de 500 linhas para mudar 2, sempre peça ou forneça apenas o **diff** ou o bloco alterado.

### 3. Sparse Context
Ao enviar erros de terminal, não mande o stack trace inteiro. Mande apenas a linha do erro e as 2 linhas de contexto acima.

## 🛠️ Padrões de Comando "Low-Token"
- **"Implement [Feature] | No talk | Diff only"**: Comando mais eficiente para atualizações.
- **"Review [Code] | Focus: Security/Perf"**: Filtra a análise para não gastar tokens com estilo.

---
*DNA CoreBrain - Otimizado para Performance*
