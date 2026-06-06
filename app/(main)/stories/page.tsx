
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesFilter from '@/components/CategoriesFilter/CategoriesFilter';
import TravellersStories from '@/components/TravellersStories/TravellersStories';
import { getStories } from '@/services/api/clientApi';
import css from "./StoriesPage.module.css";

type StoriesPageProps = {
  searchParams: { category?: string };
};

export default async function StoriesPage({ searchParams }: StoriesPageProps) {
  const { category } = await searchParams;
  const { stories } = await getStories({ category });
  return (
    <div className={css.container}>
        <PageTitle title="Статті"/>
        <CategoriesFilter/>
        <TravellersStories stories={stories} category={category} />
    </div>
  );
}

