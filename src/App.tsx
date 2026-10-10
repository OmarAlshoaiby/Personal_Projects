import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Brain, AudioLines, Cpu, Layers,
  ChevronRight, Terminal, GitBranch, Zap,
  ArrowRight, BookOpen, Server, Shield,
  Menu, X
} from 'lucide-react';
import CodeBlock from './components/CodeBlock';

const sections = [
  { id: 'foundation', title: 'Tauri v2 & SQLite', icon: Server, color: 'blue' },
  { id: 'tokenizer', title: 'Tokenizer Pipeline', icon: GitBranch, color: 'purple' },
  { id: 'crdt', title: 'CRDT Persistence', icon: Database, color: 'blue' },
  { id: 'fsrs', title: 'FSRS Integration', icon: Brain, color: 'purple' },
  { id: 'audio', title: 'Audio Pipeline', icon: AudioLines, color: 'cyan' },
  { id: 'async', title: 'Async Hardening', icon: Cpu, color: 'green' },
  { id: 'canvas', title: 'Virtualized Canvas', icon: Layers, color: 'orange' },
  { id: 'production', title: 'Production Hardening', icon: Shield, color: 'green' },
  { id: 'synthesis', title: 'Architecture Synthesis', icon: Layers, color: 'orange' },
];

function NavSidebar({ activeSection, mobileOpen, onClose }: { activeSection: string; mobileOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-surface-800/95 backdrop-blur-xl border-r border-surface-600
        z-50 transform transition-transform duration-300 lg:translate-x-0 lg:sticky lg:top-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <Terminal size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Blueprint to Binary</h2>
              <p className="text-xs text-slate-500">Production Guide</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">Sections</p>
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={onClose}
                  className={`nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    isActive ? 'active text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-accent-blue' : ''} />
                  <span>{section.title}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick stats */}
          <div className="mt-8 p-4 rounded-lg bg-surface-700/50 border border-surface-600">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</p>
            <div className="space-y-2">
              {['Rust', 'Tauri v2', 'SQLite (WAL/MMIO)', 'yrs (CRDT)', 'Aho-Corasick', 'FSRS', 'Whisper.cpp', 'OffscreenCanvas', 'WASM'].map(tech => (
                <div key={tech} className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-700/50 border border-surface-600 text-xs text-slate-400 mb-8">
            <Zap size={12} className="text-accent-orange" />
            <span>Local-First Architecture • Rust • CRDTs • AI</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">From Blueprint</span>
          <br />
          <span className="gradient-text">to Binary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A production guide for building a local-first language learning application
          with Rust, CRDTs, FSRS scheduling, and on-device AI inference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#crdt" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue hover:bg-blue-600 text-white font-medium transition-colors">
            <BookOpen size={18} />
            Start Reading
          </a>
          <a href="#synthesis" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-700 hover:bg-surface-600 text-slate-300 font-medium border border-surface-600 transition-colors">
            <Layers size={18} />
            Architecture Overview
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Subsystems', value: '8' },
            { label: 'Rust Crates', value: '15+' },
            { label: 'Zero Network', value: '100%' },
            { label: 'App Size', value: '~8 MB' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundationSection() {
  return (
    <section id="foundation" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
            <Server size={20} className="text-accent-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Tauri v2 & Optimized SQLite</h2>
            <p className="text-sm text-slate-500">Application scaffolding & embedded storage engine</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The foundation is a <strong className="text-white">Tauri v2 shell</strong> paired with an optimally configured
            embedded SQLite storage engine. By containerizing a compiled Rust backend within a native OS webview, Tauri
            enables a truly local-first experience where all core operations occur offline at machine speed. The final
            package is typically <strong className="text-white">5-10 MB</strong> vs Electron's 120+ MB.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-blue">Key Insight:</strong> The IPC bridge must be treated as a
              high-bandwidth pipe for heavy data, not a mechanism for fine-grained, chatty communication.
              All data passed across the boundary is serialized to JSON — minimize these calls.
            </p>
          </div>

          <p>
            SQLite performance is unlocked through aggressive configuration. Memory-Mapped I/O (MMIO) eliminates
            kernel-user space data copy overhead. Write-Ahead Logging (WAL) enables high reader concurrency.
            These pragmas are prerequisites for meeting sub-25ms initial lesson loads.
          </p>
        </div>

        {/* SQLite Pragmas Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Configuration</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Memory-Mapped I/O</td>
                <td><code className="text-accent-cyan font-mono text-xs">PRAGMA mmap_size = 268435456</code></td>
                <td className="text-xs">256MB maps working set; eliminates copy overhead for reads</td>
              </tr>
              <tr>
                <td className="font-medium text-white">WAL Mode</td>
                <td><code className="text-accent-cyan font-mono text-xs">PRAGMA journal_mode = WAL</code></td>
                <td className="text-xs">Multiple readers + single writer without blocking</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Sync Mode</td>
                <td><code className="text-accent-cyan font-mono text-xs">PRAGMA synchronous = NORMAL</code></td>
                <td className="text-xs">Balance durability with responsiveness</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Vector Search</td>
                <td><code className="text-accent-cyan font-mono text-xs">sqlite-vec</code> extension</td>
                <td className="text-xs">Native vector search for contextual WSD</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Bulk Inserts</td>
                <td><code className="text-accent-cyan font-mono text-xs">BEGIN...COMMIT</code></td>
                <td className="text-xs">Prevent per-statement transaction overhead</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DB Init Code */}
        <CodeBlock
          language="rust"
          filename="src/db.rs"
          code={`use rusqlite::{Connection, Result, params};
use std::sync::Mutex;

pub struct Database {
    conn: Mutex<Connection>,
}

impl Database {
    pub fn new(db_path: &str) -> Result<Self> {
        let conn = Connection::open(db_path)?;

        // Critical Performance Pragmas
        conn.execute_batch("
            PRAGMA journal_mode = WAL;
            PRAGMA synchronous = NORMAL;
            PRAGMA mmap_size = 268435456;  -- 256MB MMIO
            PRAGMA cache_size = -64000;     -- 64MB cache
            PRAGMA temp_store = MEMORY;
        ")?;

        // Initialize Schema
        conn.execute_batch("
            CREATE TABLE IF NOT EXISTS terms (
                id INTEGER PRIMARY KEY,
                surface TEXT NOT NULL,
                status TEXT NOT NULL,
                fsrs_stability REAL,
                fsrs_difficulty REAL,
                last_review INTEGER
            );
            CREATE TABLE IF NOT EXISTS sync_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                update_data BLOB NOT NULL
            );
            CREATE TABLE IF NOT EXISTS snapshots (
                id INTEGER PRIMARY KEY,
                data BLOB NOT NULL,
                timestamp INTEGER NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_terms_surface
                ON terms(surface);
        ")?;

        Ok(Self { conn: Mutex::new(conn) })
    }
}`}
        />

        <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4 mt-4">
          <p className="text-sm">
            <strong className="text-accent-orange">⚠️ Windows Caveat:</strong> The OS cannot truncate a memory-mapped
            file. After <code className="text-accent-cyan font-mono text-xs">VACUUM</code>, the file may retain unused
            space. Also, MMIO'd data could be written to unencrypted swap — a privacy consideration.
          </p>
        </div>
      </div>
    </section>
  );
}

function TokenizerSection() {
  return (
    <section id="tokenizer" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
            <GitBranch size={20} className="text-accent-purple" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Advanced Tokenizer Pipeline</h2>
            <p className="text-sm text-slate-500">Linear-time multi-word expression matching</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The central algorithmic innovation replaces inefficient server-side relational joins with a client-side
            tokenizer pipeline achieving <strong className="text-white">linear-time complexity</strong> for Multi-Word
            Expression (MWE) matching using the <strong className="text-white">Aho-Corasick algorithm</strong>.
          </p>

          <p>
            The pipeline is a modular, hierarchical process with three distinct stages that produces richly annotated
            output ready for rendering.
          </p>
        </div>

        {/* Pipeline stages */}
        <div className="grid md:grid-cols-3 gap-4 my-6">
          {[
            {
              step: '1',
              title: 'Base Tokenization',
              desc: 'Segment raw text into grapheme clusters using unicode-segmentation. Preserve byte-level offsets for precise positioning.',
              crate: 'unicode-segmentation',
            },
            {
              step: '2',
              title: 'Aho-Corasick MWE Match',
              desc: 'Build automaton with LeftmostLongest semantics. Scan text once to find all multi-word expressions simultaneously.',
              crate: 'aho-corasick',
            },
            {
              step: '3',
              title: 'State Reconciliation',
              desc: 'Overlay MWE byte ranges onto base tokens. Check remaining tokens against single-word vocabulary hash map.',
              crate: 'HashMap<String, TermData>',
            },
          ].map(stage => (
            <div key={stage.step} className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-bold flex items-center justify-center">{stage.step}</span>
                <h4 className="text-white font-semibold text-sm">{stage.title}</h4>
              </div>
              <p className="text-slate-400 text-xs mb-2">{stage.desc}</p>
              <code className="text-accent-cyan font-mono text-xs">{stage.crate}</code>
            </div>
          ))}
        </div>

        {/* Code */}
        <CodeBlock
          language="rust"
          filename="src/tokenizer.rs"
          code={`use aho_corasick::{AhoCorasick, AhoCorasickBuilder, MatchKind};
use unicode_segmentation::UnicodeSegmentation;
use std::collections::HashMap;

#[derive(Debug, Clone, serde::Serialize)]
pub struct ProcessedToken {
    pub surface: String,
    pub start_byte: usize,
    pub end_byte: usize,
    pub term_id: Option<u64>,
    pub is_mwe_part: bool,
    pub is_whitespace: bool,
}

pub struct TokenizerPipeline {
    ac_automaton: AhoCorasick,
    single_word_map: HashMap<String, u64>,
}

impl TokenizerPipeline {
    pub fn new(
        mwes: Vec<String>,
        single_words: Vec<(String, u64)>,
    ) -> Self {
        // LeftmostLongest: "take into account" beats "take"
        let ac = AhoCorasickBuilder::new()
            .match_kind(MatchKind::LeftmostLongest)
            .build(&mwes);

        let word_map: HashMap<String, u64> =
            single_words.into_iter().collect();

        Self {
            ac_automaton: ac,
            single_word_map: word_map,
        }
    }

    pub fn process(&self, raw_text: &str) -> Vec<ProcessedToken> {
        // Stage 1: Grapheme clusters for Unicode safety
        let mut tokens: Vec<ProcessedToken> = raw_text
            .grapheme_indices(true)
            .map(|(idx, grapheme)| ProcessedToken {
                surface: grapheme.to_string(),
                start_byte: idx,
                end_byte: idx + grapheme.len(),
                term_id: None,
                is_mwe_part: false,
                is_whitespace: grapheme.trim().is_empty(),
            })
            .collect();

        // Stage 2: Aho-Corasick MWE matching
        let mwe_ranges: Vec<(usize, usize)> = self
            .ac_automaton
            .find_iter(raw_text)
            .map(|m| (m.start(), m.end()))
            .collect();

        for token in &mut tokens {
            if token.is_whitespace { continue; }
            token.is_mwe_part = mwe_ranges.iter().any(|&(s, e)| {
                token.start_byte >= s && token.end_byte <= e
            });
        }

        // Stage 3: Single word reconciliation
        for token in &mut tokens {
            if token.is_mwe_part || token.is_whitespace {
                continue;
            }
            let clean = token.surface.to_lowercase();
            if let Some(&id) = self.single_word_map.get(&clean) {
                token.term_id = Some(id);
            }
        }

        tokens
    }
}`}
        />

        <div className="bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 border border-accent-purple/20 rounded-lg p-4 mt-4">
          <p className="text-sm">
            <strong className="text-accent-purple">Performance:</strong> The <code className="text-accent-cyan font-mono text-xs">aho-corasick</code> crate
            supports SIMD acceleration. Matching tens of thousands of MWEs against large text documents remains
            fast and responsive — <strong className="text-white">O(n)</strong> regardless of vocabulary size.
          </p>
        </div>
      </div>
    </section>
  );
}

function CanvasSection() {
  return (
    <section id="canvas" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center">
            <Layers size={20} className="text-accent-orange" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Virtualized Canvas Rendering</h2>
            <p className="text-sm text-slate-500">O(1) DOM nodes via OffscreenCanvas + Web Workers</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The <strong className="text-white">"DOM Overdraw" problem</strong> is the primary cause of poor performance
            in existing language immersion tools. Rendering each word as an independent DOM element creates tens of
            thousands of nodes, causing high memory consumption and stuttering UIs.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-orange">Lighthouse Warning:</strong> Pages with &gt;800 DOM nodes trigger
              warnings. Anything over 1,400 is considered excessive. A 50,000-word lesson would create catastrophic DOM size.
            </p>
          </div>

          <p>
            The solution is a <strong className="text-white">virtualized UI component</strong> that limits rendering
            to only the elements currently visible within the user's viewport. For maximum performance, an
            <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">OffscreenCanvas</code> powered
            by a <strong className="text-white">Web Worker</strong> handles all text measurement and drawing off the main thread.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="mt-6 bg-surface-700/30 border border-surface-600 rounded-lg p-6">
          <h4 className="text-white font-semibold text-sm mb-4 text-center">Rendering Architecture</h4>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full max-w-lg bg-surface-800 border border-accent-blue/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-blue font-semibold">Main Thread</p>
              <p className="text-xs text-slate-500 mt-1">Scroll events • Click handling • IPC requests</p>
            </div>
            <div className="text-slate-500 text-xs">↕ postMessage (token slice)</div>
            <div className="w-full max-w-lg bg-surface-800 border border-accent-purple/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-purple font-semibold">Web Worker (OffscreenCanvas)</p>
              <p className="text-xs text-slate-500 mt-1">Text measurement • Layout calculation • Drawing operations</p>
            </div>
            <div className="text-slate-500 text-xs">↕ transferToImageBitmap</div>
            <div className="w-full max-w-lg bg-surface-800 border border-accent-green/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-green font-semibold">Rust Backend (Tauri)</p>
              <p className="text-xs text-slate-500 mt-1">Authoritative token state • Viewport slice queries</p>
            </div>
          </div>
        </div>

        {/* Frontend pseudocode */}
        <CodeBlock
          language="rust"
          filename="Reader.tsx (conceptual)"
          code={`// Virtualized Canvas Component (React)
const VirtualizedReader = ({ lessonId }) => {
  const canvasRef = useRef(null);
  const [allTokens, setAllTokens] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);

  // Worker for off-main-thread rendering
  const worker = useMemo(
    () => new Worker(
      new URL('./canvasWorker.ts', import.meta.url)
    ), []
  );

  // Load data from Rust backend
  useEffect(() => {
    invoke('load_and_tokenize_lesson', { lessonId })
      .then(setAllTokens);
  }, [lessonId]);

  // Calculate visible window on scroll
  useEffect(() => {
    const startRow = Math.floor(scrollTop / ROW_HEIGHT);
    const visibleRows = Math.ceil(
      containerHeight / ROW_HEIGHT
    ) + 2; // Buffer rows
    const startIndex = startRow * TOKENS_PER_ROW;
    const endIndex = Math.min(
      startIndex + (visibleRows * TOKENS_PER_ROW),
      allTokens.length
    );

    const visibleTokens = allTokens.slice(
      startIndex, endIndex
    );

    // Send to worker for drawing
    worker.postMessage({
      type: 'RENDER',
      tokens: visibleTokens,
      width: canvas.width,
      height: canvas.height,
      offsetY: startRow * ROW_HEIGHT,
    });
  }, [scrollTop, allTokens]);

  return (
    <div onScroll={handleScroll}
         style={{ height: '100vh', overflowY: 'scroll' }}>
      {/* Spacer for correct scroll height */}
      <div style={{
        height: (allTokens.length / TOKENS_PER_ROW)
                * ROW_HEIGHT
      }} />
      <canvas ref={canvasRef}
              style={{ position: 'absolute', top: 0 }} />
    </div>
  );
};`}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <h4 className="text-white font-semibold text-sm mb-2">WASM Optimization</h4>
            <p className="text-slate-400 text-xs">
              For hover events, compile tokenizer logic to WASM and execute synchronously in the browser's
              main thread — instant visual feedback without IPC serialization delay.
            </p>
          </div>
          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <h4 className="text-white font-semibold text-sm mb-2">Zero-Copy IPC</h4>
            <p className="text-slate-400 text-xs">
              Use <code className="text-accent-cyan font-mono text-xs">rkyv</code> or <code className="text-accent-cyan font-mono text-xs">bincode</code> for
              binary token payloads instead of JSON. Tauri v2 supports raw <code className="text-accent-cyan font-mono text-xs">Vec&lt;u8&gt;</code> responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductionSection() {
  return (
    <section id="production" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center">
            <Shield size={20} className="text-accent-green" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Production Hardening</h2>
            <p className="text-sm text-slate-500">Build system, error handling, CI/CD & code signing</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Transitioning from blueprint to production requires addressing security boundaries, crash telemetry,
            cross-platform build pipelines, memory safety across FFI boundaries, and strict error handling.
            <code className="px-1.5 py-0.5 rounded bg-surface-700 text-red-400 text-sm font-mono">unwrap()</code> is
            strictly forbidden in production code.
          </p>
        </div>

        {/* Cargo.toml */}
        <CodeBlock
          language="rust"
          filename="Cargo.toml"
          code={`[package]
name = "lingua-core"
version = "1.0.0"
edition = "2021"
build = "build.rs"

[dependencies]
# Tauri v2 Core
tauri = { version = "2.0", features = [
    "macos-private-api", "tray-icon", "updater"
] }
tauri-plugin-fs = "2.0"
tauri-plugin-store = "2.0"

# Async Runtime
tokio = { version = "1.38", features = ["full"] }

# Database & CRDT
rusqlite = { version = "0.31", features = [
    "bundled", "backup", "blob", "wal"
] }
yrs = { version = "0.21", features = ["sync"] }

# AI & NLP
whisper-rs = { version = "0.11", features = [
    "metal", "cuda"
] }
aho-corasick = "1.1"
fsrs = "2.0"

# Observability
thiserror = "1.0"
tracing = "0.1"
tracing-subscriber = { version = "0.3", features = [
    "env-filter", "json"
] }
sentry = { version = "0.34", features = [
    "tracing", "anyhow"
] }

[build-dependencies]
cmake = "0.1"
cc = "1.0"`}
        />

        {/* Error handling */}
        <CodeBlock
          language="rust"
          filename="src/error.rs"
          code={`use serde::Serialize;
use thiserror::Error;

#[derive(Debug, Error, Serialize)]
pub enum AppError {
    #[error("Database error: {0}")]
    Database(String),
    #[error("CRDT sync failed: {0}")]
    CrdtSync(String),
    #[error("AI Inference error: {0}")]
    Inference(String),
    #[error("IPC serialization error")]
    Serialization,
}

// Auto-converts to rejected JS Promise
impl From<rusqlite::Error> for AppError {
    fn from(err: rusqlite::Error) -> Self {
        AppError::Database(err.to_string())
    }
}`}
        />

        {/* Tauri capabilities */}
        <div className="mt-6">
          <h4 className="text-white font-semibold text-sm mb-3">Tauri v2 Capability Scoping</h4>
          <CodeBlock
            language="rust"
            filename="capabilities/default.json"
            code={`{
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "fs:allow-read-text-file",
    "fs:allow-write-text-file",
    {
      "identifier": "fs:scope",
      "allow": [
        { "path": "$APPDATA/**" },
        { "path": "$DOCUMENTS/Import/**" }
      ]
    },
    "shell:allow-open",
    "store:default"
  ]
}`}
          />
          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-3 mt-3">
            <p className="text-xs text-slate-400">
              <strong className="text-accent-orange">Security:</strong> Never grant <code className="text-accent-cyan font-mono text-xs">fs:allow-write-file</code> to
              <code className="text-accent-cyan font-mono text-xs"> $HOME/**</code>. Scope strictly to app data directory and designated import folders.
            </p>
          </div>
        </div>

        {/* CI/CD */}
        <div className="mt-6">
          <h4 className="text-white font-semibold text-sm mb-3">CI/CD & Auto-Updates</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
              <h5 className="text-accent-cyan font-semibold text-xs mb-2">GitHub Actions</h5>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Universal binary (Intel + Apple Silicon)</li>
                <li>• Windows code signing (SmartScreen)</li>
                <li>• macOS notarization (Gatekeeper)</li>
                <li>• Linux AppImage + deb</li>
              </ul>
            </div>
            <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
              <h5 className="text-accent-cyan font-semibold text-xs mb-2">Pre-Flight Checklist</h5>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• WAL checkpoint every 6 hours</li>
                <li>• Memory leak profiling with <code className="text-accent-cyan font-mono">dhat</code></li>
                <li>• Cross-platform path resolution</li>
                <li>• GPU fallback warning for Whisper</li>
                <li>• Database migration system (refinery)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrdtSection() {
  return (
    <section id="crdt" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
            <Database size={20} className="text-accent-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">CRDT Persistence & State Rehydration</h2>
            <p className="text-sm text-slate-500">Log-based replay strategy with SQLite</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">yrs</code> library
            provides powerful in-memory Yjs CRDTs but lacks inherent persistence. For a local-first language app, a robust
            persistence layer is mandatory. We use a <strong className="text-white">log-based replay strategy</strong> in SQLite,
            durable update logging, and update squashing.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-blue">Core Principle:</strong> Treat the <code className="text-accent-cyan font-mono text-xs">yrs::Doc</code> as
              transient in memory but durably logged on disk. Every mutation is recorded as a binary-encoded update in
              a <code className="text-accent-cyan font-mono text-xs">sync_log</code> SQLite table.
            </p>
          </div>

          <p>
            The <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">CrdtPersistenceManager</code> encapsulates
            the <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">yrs::Doc</code> and
            SQLite connection. On <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">new()</code>,
            it fetches all <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">sync_log</code> records
            ordered by <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">id</code>, deserializes them
            into <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">yrs::Update</code>, and applies
            them sequentially via <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">doc.apply_update()</code>.
          </p>

          <p>
            Updates are applied <strong className="text-white">atomically</strong>. The <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">apply_and_log</code> method
            bundles changes into a <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">yrs::Update</code>,
            applies it within a yrs transaction, encodes it, and inserts it into <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">sync_log</code> within
            a single SQLite transaction.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-orange">⚠️ Critical:</strong> <code className="text-accent-cyan font-mono text-xs">yrs::Doc</code> mutations
              from multiple threads will <strong className="text-red-400">panic</strong>. All mutations must be routed through a
              dedicated, single-threaded worker via <code className="text-accent-cyan font-mono text-xs">mpsc</code> channels.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
                <th>Key Tech</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Storage</td>
                <td>Durable storage for CRDT updates</td>
                <td><code className="text-accent-cyan font-mono text-xs">rusqlite</code>, <code className="text-accent-cyan font-mono text-xs">yrs</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Schema</td>
                <td>Chronological binary <code className="text-accent-cyan font-mono text-xs">yrs::Update</code> log</td>
                <td><code className="text-accent-cyan font-mono text-xs">CREATE TABLE sync_log</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Rehydration</td>
                <td>Replay log on startup to rebuild Doc</td>
                <td><code className="text-accent-cyan font-mono text-xs">doc.apply_update()</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Squashing</td>
                <td>Periodic snapshot creation & log truncation</td>
                <td><code className="text-accent-cyan font-mono text-xs">DELETE FROM sync_log</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Concurrency</td>
                <td>Single-threaded mutation via worker thread</td>
                <td><code className="text-accent-cyan font-mono text-xs">mpsc</code> channel</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Code */}
        <CodeBlock
          language="rust"
          filename="crdt_persistence.rs"
          code={`use yrs::{Doc, Update};
use rusqlite::Connection;

pub struct CrdtPersistenceManager {
    db: Connection,
    doc: Doc,
}

impl CrdtPersistenceManager {
    pub fn new(db_path: &str) -> Result<Self, Box<dyn std::error::Error>> {
        let db = Connection::open(db_path)?;
        db.execute(
            "CREATE TABLE IF NOT EXISTS sync_log \
             (id INTEGER PRIMARY KEY, update_data BLOB)",
            [],
        )?;
        let doc = Doc::new();
        let mut stmt = db.prepare(
            "SELECT update_data FROM sync_log ORDER BY id ASC"
        )?;
        for row in stmt.query_map([], |r| r.get::<_, Vec<u8>>(0))? {
            let update = Update::decode(&row?)?;
            let mut txn = doc.transact_mut();
            txn.apply_update(update);
        }
        Ok(Self { db, doc })
    }

    pub fn apply_and_log(
        &self,
        update: Update,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let mut txn = self.doc.transact_mut();
        txn.apply_update(update.clone());
        let encoded = update.encode_v1()?;
        let tx = self.db.transaction()?;
        tx.execute(
            "INSERT INTO sync_log (update_data) VALUES (?)",
            [encoded],
        )?;
        tx.commit()?;
        Ok(())
    }
}`}
        />
      </div>
    </section>
  );
}

function FsrsSection() {
  return (
    <section id="fsrs" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
            <Brain size={20} className="text-accent-purple" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">FSRS Integration & Parameterization</h2>
            <p className="text-sm text-slate-500">Free Spaced Repetition Scheduler optimization</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The <strong className="text-white">Free Spaced Repetition Scheduler (FSRS)</strong> optimizes review timing
            using Stability (S), Difficulty (D), and Retrievability (R). Integrating <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">fsrs-rs</code> requires
            managing the scheduler's state, parameter optimization, and legacy data migration.
          </p>

          <p>
            The <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">fsrs::Scheduler</code> holds
            trainable parameters. A <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">SpacedRepetitionService</code> wrapper
            loads/saves these from SQLite. Default parameters are a baseline, but true efficacy comes from tailoring
            them to the user via the library's <strong className="text-white">gradient descent optimizer</strong>.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-purple">Review Flow:</strong> When a user rates a card (Again, Hard, Good, Easy),
              the service takes the card's <code className="text-accent-cyan font-mono text-xs">fsrs::MemoryState</code> and
              the rating, calling <code className="text-accent-cyan font-mono text-xs">scheduler.next_interval()</code>. This returns
              the updated MemoryState and the next interval in days.
            </p>
          </div>

          <p>
            Parameter optimization is computationally intensive and should run offline (e.g., daily). Collect recent reviews
            into <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">FSRSItem</code> structs
            and pass this dataset to <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">compute_parameters()</code> to
            find weights that yield lower loss.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
            <p className="text-sm">
              <strong className="text-accent-green">SM-2 Migration:</strong> For users migrating from SM-2,
              use <code className="text-accent-cyan font-mono text-xs">memory_state_from_sm2()</code> to convert legacy ease
              factors and intervals into initial FSRS Stability and Difficulty values.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Detail</th>
                <th>Crate/API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Core Logic</td>
                <td>Manage memory model and calculate intervals</td>
                <td><code className="text-accent-cyan font-mono text-xs">fsrs::Scheduler</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Card State</td>
                <td>Store evolving S and D values per card</td>
                <td><code className="text-accent-cyan font-mono text-xs">fsrs::MemoryState</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Review</td>
                <td>Get next interval and state from rating</td>
                <td><code className="text-accent-cyan font-mono text-xs">scheduler.next_interval()</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Training</td>
                <td>Optimize parameters on historical review data</td>
                <td><code className="text-accent-cyan font-mono text-xs">compute_parameters()</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Migration</td>
                <td>Convert SM-2 state to initial FSRS state</td>
                <td><code className="text-accent-cyan font-mono text-xs">memory_state_from_sm2()</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Code */}
        <CodeBlock
          language="rust"
          filename="spaced_repetition.rs"
          code={`use fsrs::{Scheduler, Rating, MemoryState, Parameters};

pub struct SpacedRepetitionService {
    scheduler: Scheduler,
}

impl SpacedRepetitionService {
    pub fn new(params: Option<Parameters>) -> Self {
        let p = params.unwrap_or_else(|| {
            Scheduler::default().parameters
        });
        Self {
            scheduler: Scheduler::from_params(p),
        }
    }

    pub fn handle_review(
        &self,
        state: MemoryState,
        rating: u8,
    ) -> (MemoryState, u32) {
        let fsrs_rating = match rating {
            1 => Rating::Again,
            2 => Rating::Hard,
            3 => Rating::Good,
            _ => Rating::Easy,
        };
        let (next_state, interval_days) =
            self.scheduler.next_interval(&state, fsrs_rating);
        (
            next_state,
            interval_days.map(|d| d.ceil() as u32).unwrap_or(1),
        )
    }
}`}
        />
      </div>
    </section>
  );
}

function AudioSection() {
  return (
    <section id="audio" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
            <AudioLines size={20} className="text-accent-cyan" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Hybrid Audio Pipeline</h2>
            <p className="text-sm text-slate-500">Word-level alignment via VAD + Whisper + CTC</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
          <p>
            Synchronizing audio with text requires a <strong className="text-white">hybrid pipeline</strong>: Voice Activity
            Detection (VAD), Whisper transcription, and CTC-based forced alignment. Relying solely on Whisper is insufficient
            for millisecond-accurate word timestamps.
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className="space-y-6 mb-8">
          {[
            {
              step: 1,
              title: 'Capture & Resample',
              desc: 'Use cpal for raw audio capture. Downmix to mono and resample to 16kHz using rubato.',
              crates: 'cpal, rubato',
              io: 'Raw PCM → Vec<f32>',
            },
            {
              step: 2,
              title: 'VAD Segmentation',
              desc: 'Use silero-vad-rust to detect speech segments, ignoring silence and background noise.',
              crates: 'silero-vad-rust',
              io: '16kHz audio → (start_ms, end_ms)',
            },
            {
              step: 3,
              title: 'Transcription',
              desc: 'Pass segments to whisper-rs (FFI to whisper.cpp). Enable token-level timestamps.',
              crates: 'whisper-rs',
              io: '16kHz audio → Transcript + Scores',
            },
            {
              step: 4,
              title: 'Forced Alignment',
              desc: 'Use a CTC aligner for Viterbi alignment with DTW on phoneme scores.',
              crates: 'rlx_wav2vec2_asr',
              io: 'Transcript + Scores → Aligned words',
            },
            {
              step: 5,
              title: 'Compilation',
              desc: 'Bundle results into a JSON payload for the frontend with precise timestamps.',
              crates: 'serde_json',
              io: 'Aligned words → JSON',
            },
          ].map((item) => (
            <div key={item.step} className="pipeline-step">
              <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Step {item.step}: {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-accent-cyan font-mono">{item.crates}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.io}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Purpose</th>
                <th>Crates</th>
                <th>Input → Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Capture</td>
                <td>Record raw audio</td>
                <td><code className="text-accent-cyan font-mono text-xs">cpal</code></td>
                <td className="text-xs">Raw PCM → Vec&lt;f32&gt;</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Resample</td>
                <td>Downmix to 16kHz mono</td>
                <td><code className="text-accent-cyan font-mono text-xs">rubato</code></td>
                <td className="text-xs">48kHz → 16kHz Vec&lt;f32&gt;</td>
              </tr>
              <tr>
                <td className="font-medium text-white">VAD</td>
                <td>Segment speech from silence</td>
                <td><code className="text-accent-cyan font-mono text-xs">silero-vad-rust</code></td>
                <td className="text-xs">Audio → (start, end)</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Transcribe</td>
                <td>Get text and phoneme scores</td>
                <td><code className="text-accent-cyan font-mono text-xs">whisper-rs</code></td>
                <td className="text-xs">Audio → Transcript</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Align</td>
                <td>Map words to timestamps</td>
                <td><code className="text-accent-cyan font-mono text-xs">rlx_wav2vec2_asr</code></td>
                <td className="text-xs">Scores → Aligned words</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-4 mt-6">
          <p className="text-sm">
            <strong className="text-accent-orange">⚠️ Performance Note:</strong> GPU acceleration is preferred. The entire
            pipeline must run in <code className="text-accent-cyan font-mono text-xs">tokio::task::spawn_blocking</code> to
            prevent blocking the Tauri main event loop. <code className="text-accent-cyan font-mono text-xs">whisper-rs-sys</code> requires
            <code className="text-accent-cyan font-mono text-xs"> clang</code>/<code className="text-accent-cyan font-mono text-xs">libclang-dev</code> for building.
          </p>
        </div>

        {/* Code */}
        <CodeBlock
          language="rust"
          filename="audio_pipeline.rs"
          code={`#[tauri::command]
async fn process_audio(
    state: tauri::State<'_, AppState>,
    audio: Vec<f32>,
) -> Result<Vec<AlignedWord>, String> {
    tokio::task::spawn_blocking(move || {
        let resampled = resample_audio(&audio)?;
        let segments = vad_detect(&resampled)?;
        let mut all_words = Vec::new();

        for (start, end) in segments {
            let chunk = &resampled[start..end];
            let whisper_out = whisper_transcribe(chunk)?;
            let mut words = ctc_align(
                &whisper_out.transcript,
                &whisper_out.scores,
            )?;

            // Offset timestamps by segment start
            for w in &mut words {
                w.start_ms += start as f32 / 16.0;
                w.end_ms += start as f32 / 16.0;
            }
            all_words.extend(words);
        }
        Ok(all_words)
    })
    .await?
}`}
        />
      </div>
    </section>
  );
}

function AsyncSection() {
  return (
    <section id="async" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center">
            <Cpu size={20} className="text-accent-green" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Tauri v2 Asynchronous Hardening</h2>
            <p className="text-sm text-slate-500">Layered async strategy for responsive UI</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
          <p>
            Tauri runs commands synchronously on the main thread by default. CPU-bound tasks (AI inference, text processing)
            will <strong className="text-red-400">freeze the UI</strong>. A layered async strategy is required.
          </p>
        </div>

        {/* Strategy cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: 'I/O-Bound',
              desc: 'Use async fn for Tauri commands. Yields to Tokio runtime during DB reads/writes.',
              icon: Server,
              colorClass: 'text-accent-blue',
            },
            {
              title: 'CPU-Bound',
              desc: 'Use tokio::task::spawn_blocking for heavy computations. Limit with semaphore.',
              icon: Cpu,
              colorClass: 'text-accent-purple',
            },
            {
              title: 'CRDT Concurrency',
              desc: 'Route all yrs mutations through a dedicated worker thread using mpsc::channel.',
              icon: GitBranch,
              colorClass: 'text-accent-cyan',
            },
            {
              title: 'Frontend WASM',
              desc: 'Use WebAssembly for lightweight UI interactions. Avoids IPC serialization overhead.',
              icon: Zap,
              colorClass: 'text-accent-green',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-surface-700/30 border border-surface-600 rounded-lg p-4 hover:border-surface-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={18} className={card.colorClass} />
                  <h4 className="text-white font-semibold text-sm">{card.title}</h4>
                </div>
                <p className="text-slate-400 text-sm">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Responsibility</th>
                <th>Pattern</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Async Commands</td>
                <td>I/O-bound DB operations</td>
                <td><code className="text-accent-cyan font-mono text-xs">async fn</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Blocking Tasks</td>
                <td>CPU-bound AI/processing</td>
                <td><code className="text-accent-cyan font-mono text-xs">spawn_blocking</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">CRDT Worker</td>
                <td>Serialize yrs::Doc mutations</td>
                <td>Dedicated thread + <code className="text-accent-cyan font-mono text-xs">mpsc</code></td>
              </tr>
              <tr>
                <td className="font-medium text-white">Concurrency Control</td>
                <td>Prevent thread pool exhaustion</td>
                <td>Semaphore / Rayon pool</td>
              </tr>
              <tr>
                <td className="font-medium text-white">WASM Bridging</td>
                <td>Instant frontend UI feedback</td>
                <td>Compile Rust to WASM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Code */}
        <CodeBlock
          language="rust"
          filename="async_worker.rs"
          code={`use tokio::sync::mpsc;
use yrs::{Doc, Update};

enum CrdtCommand {
    ApplyUpdate(Vec<u8>),
    Stop,
}

struct CrdtWorker {
    doc: Doc,
}

impl CrdtWorker {
    async fn run(mut self, mut rx: mpsc::Receiver<CrdtCommand>) {
        while let Some(cmd) = rx.recv().await {
            match cmd {
                CrdtCommand::ApplyUpdate(data) => {
                    let mut txn = self.doc.transact_mut();
                    txn.apply_update(
                        Update::decode(&data).unwrap()
                    );
                }
                CrdtCommand::Stop => break,
            }
        }
    }
}

#[tauri::command]
async fn heavy_task(
    state: tauri::State<'_, AppState>,
    data: Vec<u8>,
) -> Result<String, String> {
    let tx = state.crdt_tx.clone();
    tokio::task::spawn_blocking(move || {
        // ... heavy CPU work ...
        let _ = tx.blocking_send(
            CrdtCommand::ApplyUpdate(data)
        );
        Ok("done".into())
    })
    .await?
}`}
        />
      </div>
    </section>
  );
}

function SynthesisSection() {
  return (
    <section id="synthesis" className="scroll-mt-8">
      <div className="section-card p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center">
            <Layers size={20} className="text-accent-orange" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Synthesis of Architectural Patterns</h2>
            <p className="text-sm text-slate-500">Unified local-first platform</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            This architecture unifies four subsystems into a cohesive, local-first platform. The core thesis is
            <strong className="text-white"> strict separation of concerns</strong>: an asynchronous Rust backend handles
            stateful, persistent, and compute-heavy work, while the frontend remains a lightweight presentation layer.
          </p>

          <div className="bg-surface-700/30 border border-surface-600 rounded-lg p-5 my-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Shield size={16} className="text-accent-green" />
              Backend Services
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: 'DatabaseService', desc: 'Optimized SQLite operations' },
                { name: 'TokenizerService', desc: 'Aho-Corasick tokenization' },
                { name: 'SyncService', desc: 'CRDT worker + persistence' },
                { name: 'AiService', desc: 'spawn_blocking audio pipeline' },
              ].map(svc => (
                <div key={svc.name} className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-accent-blue mt-0.5 shrink-0" />
                  <div>
                    <code className="text-accent-cyan font-mono text-xs">{svc.name}</code>
                    <p className="text-slate-500 text-xs mt-0.5">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The Tauri v2 IPC bridge is a <strong className="text-white">high-bandwidth pipe</strong>, not for chatty
            communication. This prevents cascading failures and maintains clean boundaries.
          </p>

          <p>
            The frontend (React/Vue) uses an <code className="px-1.5 py-0.5 rounded bg-surface-700 text-accent-cyan text-sm font-mono">OffscreenCanvas</code> Web
            Worker for smooth rendering of thousands of tokens. Lightweight interactions (hovers) use compiled
            Rust-to-WASM for zero-latency feedback, while state mutations trigger async Tauri commands.
          </p>

          <div className="bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 border border-accent-blue/20 rounded-lg p-5 my-6">
            <h4 className="text-white font-semibold mb-2">🏗️ The Local-First Promise</h4>
            <p className="text-sm text-slate-400">
              Vocabulary additions trigger optimistic UI updates, while the backend serializes the change to the SQLite
              sync_log. On another device, the log replays to hydrate state. Audio processing and FSRS scheduling run
              entirely offline, personalizing the experience without network dependency.
            </p>
            <p className="text-sm text-accent-green font-medium mt-3">
              The network is optional; the application is fully functional, private, and user-owned.
            </p>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mt-8 bg-surface-700/30 border border-surface-600 rounded-lg p-6">
          <h4 className="text-white font-semibold text-sm mb-4 text-center">System Architecture</h4>
          <div className="flex flex-col items-center gap-3">
            {/* Frontend */}
            <div className="w-full max-w-md bg-surface-800 border border-accent-blue/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-blue font-semibold">Frontend Layer</p>
              <p className="text-xs text-slate-500 mt-1">React + OffscreenCanvas + WASM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-surface-600"></div>
              <ChevronRight size={16} className="text-slate-500 rotate-90" />
              <div className="w-px h-4 bg-surface-600"></div>
            </div>
            {/* IPC */}
            <div className="w-full max-w-md bg-surface-800 border border-accent-purple/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-purple font-semibold">Tauri v2 IPC Bridge</p>
              <p className="text-xs text-slate-500 mt-1">Async Commands + Event System</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-surface-600"></div>
              <ChevronRight size={16} className="text-slate-500 rotate-90" />
              <div className="w-px h-4 bg-surface-600"></div>
            </div>
            {/* Backend */}
            <div className="w-full max-w-md bg-surface-800 border border-accent-green/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-green font-semibold">Rust Backend Services</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['Database', 'Tokenizer', 'Sync', 'AI'].map(s => (
                  <span key={s} className="px-2 py-0.5 bg-surface-700 rounded text-xs text-slate-400">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-surface-600"></div>
              <ChevronRight size={16} className="text-slate-500 rotate-90" />
              <div className="w-px h-4 bg-surface-600"></div>
            </div>
            {/* Storage */}
            <div className="w-full max-w-md bg-surface-800 border border-accent-orange/30 rounded-lg p-3 text-center">
              <p className="text-xs text-accent-orange font-semibold">Persistence Layer</p>
              <p className="text-xs text-slate-500 mt-1">SQLite + sync_log + snapshots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('crdt');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface-900">
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 z-30 lg:hidden bg-surface-800/95 backdrop-blur-xl border-b border-surface-600">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-white">Blueprint to Binary</span>
          </div>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 rounded-lg hover:bg-surface-700 text-slate-400"
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <NavSidebar
          activeSection={activeSection}
          mobileOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0 lg:ml-0 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 lg:py-12">
            <HeroSection />

            <div className="mt-16 space-y-12">
              {[FoundationSection, TokenizerSection, CrdtSection, FsrsSection, AudioSection, AsyncSection, CanvasSection, ProductionSection, SynthesisSection].map((Section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Section />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-surface-700 text-center">
              <p className="text-sm text-slate-500">
                From Blueprint to Binary — A Production Guide for Local-First Language Applications
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Built with Rust • Tauri v2 • CRDTs • Local AI
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
