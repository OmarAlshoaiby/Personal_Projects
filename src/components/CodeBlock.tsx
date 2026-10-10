import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

function highlightRust(code: string): string {
  // Escape HTML first
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments (// and /* */)
  html = html.replace(/(\/\/.*$)/gm, '<span class="token-comment">$1</span>');
  html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');

  // Strings
  html = html.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="token-string">$1</span>');

  // Macros
  html = html.replace(/(\w+!)/g, '<span class="token-macro">$1</span>');

  // Attributes
  html = html.replace(/(#\[\w+(?:\([^)]*\))?\])/g, '<span class="token-attribute">$1</span>');

  // Keywords
  const keywords = ['use', 'pub', 'fn', 'let', 'mut', 'struct', 'impl', 'enum', 'match', 'if', 'else', 'for', 'while', 'loop', 'return', 'self', 'Self', 'move', 'async', 'await', 'where', 'trait', 'type', 'const', 'static', 'ref', 'as', 'in'];
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    html = html.replace(regex, '<span class="token-keyword">$1</span>');
  });

  // Types
  const types = ['Result', 'Option', 'Vec', 'String', 'Box', 'Ok', 'Err', 'Some', 'None', 'Doc', 'Update', 'Connection', 'Scheduler', 'MemoryState', 'Rating', 'Parameters', 'AppState', 'CrdtCommand', 'CrdtWorker', 'CrdtPersistenceManager', 'SpacedRepetitionService', 'AlignedWord', 'FSRSItem', 'Receiver', 'Sender'];
  types.forEach(t => {
    const regex = new RegExp(`\\b(${t})\\b`, 'g');
    html = html.replace(regex, '<span class="token-type">$1</span>');
  });

  // Numbers
  html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>');

  // Function calls
  html = html.replace(/(\w+)(?=\s*\()/g, (match, name) => {
    if (keywords.includes(name) || types.includes(name)) return match;
    return `<span class="token-function">${name}</span>`;
  });

  return html;
}

export default function CodeBlock({ code, language = 'rust', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighted = language === 'rust' ? highlightRust(code) : code;

  return (
    <div className="code-block my-6 relative group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-code-border bg-surface-800/50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          {filename && (
            <span className="text-xs text-slate-500 ml-2 font-mono">{filename}</span>
          )}
          {!filename && (
            <span className="text-xs text-slate-500 ml-2 font-mono uppercase">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded hover:bg-surface-700"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code */}
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </div>
  );
}
