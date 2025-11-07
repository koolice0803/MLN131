export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  details: string[];
  category: "political" | "military" | "social" | "international";
}

export interface Document {
  id: string;
  title: string;
  date: string;
  type: "law" | "report" | "news" | "study";
  description: string;
  url?: string;
  importance: "high" | "medium" | "low";
}

export interface AnalysisPoint {
  id: string;
  category: string;
  title: string;
  detail: string;
  content: string[];
  evidence: string[];
  counterArguments?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  section: string;
  relevance: number;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  description: string;
}
