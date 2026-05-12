export interface Question {
  statement: string;
  options: string[];
  correct_answer: string;
  explanation?: string;
}

export interface ExamData {
  title: string;
  questions: Question[];
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  icon: React.ReactNode;
}

export interface QuestionComponentProps {
  question: Question;
  index: number;
  onCopy: () => void;
  tooltipMessage: string;
  onCloseTooltip: () => void;
}

export interface ExamComponentProps {
  questions: ExamData;
  onClickBackButton: () => void;
}

export interface QuizProps {
  questions: Question[];
  title?: string;
  durationMinutes?: number;
  onExit?: () => void;
}

export interface ColorModeContextValue {
  toggleColorMode: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
