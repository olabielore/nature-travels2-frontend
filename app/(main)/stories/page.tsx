
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesFilter from '@/components/CategoriesFilter/CategoriesFilter';
import Pagination from '@/components/Pagination/Pagination';
import css from "./StoriesPage.module.css";

type StoriesPageProps = {
  searchParams: { category?: string };
};

export default async function StoriesPage({ searchParams }: StoriesPageProps) {
  const { category } = await searchParams;

  return (
    <div className={css.container}>
        <PageTitle title="Статті"/>
        <CategoriesFilter/>
        <Pagination category={category} />
    </div>
  );
}

