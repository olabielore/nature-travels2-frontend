
import TravellerInfo from '@/components/TravellerInfo/TravellerInfo';
import PageTitle from '@/components/PageTitle/PageTitle';
import TravellersStories from '@/components/TravellersStories/TravellersStories';

type Props = {
  params: Promise<{ travellerId: string }>;
};

export default async function TravellerPage({ params }: Props) {
  const { travellerId } = await params;

  return (
    <>
        <TravellerInfo travellerId={travellerId} />
        <PageTitle title="Статті Мандрівника" />
        <TravellersStories ownerId={travellerId} />
    </>
  );
}