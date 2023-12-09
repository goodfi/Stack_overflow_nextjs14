import QuestionCard from '@/components/cards/QuestionCard';
import Filters from '@/components/shared/Filters/Filters';
import HomeFilters from '@/components/shared/Filters/HomeFilters';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

const questions: any[] = [
  {
    id: '1',
    title: 'How to improve JavaScript performance?',
    tags: [
      { _id: '1', name: 'javascript' },
      { _id: '2', name: 'performance' },
    ],
    author: {
      _id: '1',
      name: 'Anna Kowalska',
      picture: 'url_do_obrazka_1',
    },
    upvotes: 110000,
    views: 23333,
    answers: [],
    createdAt: new Date('2023-09-15T08:30:00.000Z'),
  },
  {
    id: '2',
    title: 'Best practices for responsive design?',
    tags: [
      { _id: '3', name: 'css' },
      { _id: '4', name: 'web design' },
    ],
    author: {
      _id: '2',
      name: 'Jan Nowak',
      picture: 'url_do_obrazka_2',
    },
    upvotes: 30,
    views: 500,
    answers: [],
    createdAt: new Date('2022-02-20T10:00:00.000Z'),
  },
  {
    id: '3',
    title: 'How to handle state in React?',
    tags: [
      { _id: '5', name: 'react' },
      { _id: '6', name: 'state management' },
    ],
    author: {
      _id: '3',
      name: 'Marek Jankowski',
      picture: 'url_do_obrazka_3',
    },
    upvotes: 20,
    views: 300,
    answers: [],
    createdAt: new Date('2022-03-05T09:20:00.000Z'),
  },
  {
    id: '4',
    title: 'Differences between SQL and NoSQL databases?',
    tags: [
      { _id: '7', name: 'sql' },
      { _id: '8', name: 'nosql' },
    ],
    author: {
      _id: '4',
      name: 'Julia Wiśniewska',
      picture: 'url_do_obrazka_4',
    },
    upvotes: 25,
    views: 400,
    answers: [],
    createdAt: new Date('2022-04-10T11:45:00.000Z'),
  },
  {
    id: '5',
    title: 'Introduction to Docker for beginners?',
    tags: [
      { _id: '9', name: 'docker' },
      { _id: '10', name: 'containers' },
    ],
    author: {
      _id: '5',
      name: 'Piotr Kubiak',
      picture: 'url_do_obrazka_5',
    },
    upvotes: 18,
    views: 350,
    answers: [],
    createdAt: new Date('2022-05-25T14:30:00.000Z'),
  },
];
const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={`/ask-question`} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for Questions Here..."
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=" hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-24">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            LinkName="Ask a question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
