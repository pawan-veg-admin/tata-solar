export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  language: string;
  isbn: string;
  pages: number;
  stock: number;
  cover: string;
  description: string;
};

export const categories = [
  'Fiction',
  'Non-Fiction',
  'Academic',
  'Competitive Exams',
  'Kids'
];

export const books: Book[] = [
  {
    id: '1',
    title: 'The Art of Focus',
    author: 'Arpit Mehta',
    category: 'Non-Fiction',
    price: 499,
    rating: 4.7,
    language: 'English',
    isbn: '9789354890011',
    pages: 280,
    stock: 24,
    cover: '/images/book-focus.jpg',
    description: 'A practical playbook for building deep focus in a distracted world with daily rituals, neuroscience-backed techniques, and worksheets.'
  },
  {
    id: '2',
    title: 'Moonlit Tales',
    author: 'Ankita Roy',
    category: 'Fiction',
    price: 349,
    rating: 4.5,
    language: 'English',
    isbn: '9788129111234',
    pages: 320,
    stock: 15,
    cover: '/images/book-moon.jpg',
    description: 'An enchanting collection of short stories weaving magic realism with everyday India, perfect for weekend reading.'
  },
  {
    id: '3',
    title: 'Data Structures in Practice',
    author: 'Prof. S. Iyer',
    category: 'Academic',
    price: 699,
    rating: 4.8,
    language: 'English',
    isbn: '9789388754870',
    pages: 640,
    stock: 40,
    cover: '/images/book-dsa.jpg',
    description: 'University-grade reference with solved examples, visual explanations, and coding challenges for interviews and semesters.'
  },
  {
    id: '4',
    title: 'UPSC GS Primer 2025',
    author: 'Forum IAS',
    category: 'Competitive Exams',
    price: 899,
    rating: 4.6,
    language: 'English',
    isbn: '9789384899001',
    pages: 720,
    stock: 32,
    cover: '/images/book-upsc.jpg',
    description: 'Comprehensive GS coverage with updated current affairs, PYQs, high-yield summaries, and practice sets for UPSC 2025.'
  },
  {
    id: '5',
    title: 'The Curious Astronaut',
    author: 'Mini Sharma',
    category: 'Kids',
    price: 275,
    rating: 4.4,
    language: 'Hindi',
    isbn: '9788194125678',
    pages: 120,
    stock: 18,
    cover: '/images/book-kids.jpg',
    description: 'Illustrated journey through space for curious kids with DIY experiments, stickers, and family reading prompts.'
  }
];
