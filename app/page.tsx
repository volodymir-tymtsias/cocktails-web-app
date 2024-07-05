import Container from '@/components/Container';
import FilterForm from '@/components/FormFilters';

export default function Home() {
  return (
    <main>
      <Container>
        <div className="relative flex justify-center">
          <div 
            className="
              height_container hidden w-[265px] bg-paynes-gray pr-6 pt-16 lg:flex lg:flex-col lg:justify-between
            "
          >
            <FilterForm />
          </div>
          <div className="height_container bg-light-gray pt-16">
            <h1 className="mb-3 font-dangrek text-2xl">Cocktails Web App</h1>
            <h1 className="mb-3 font-dangrek text-3xl uppercase">Cocktaildb</h1>
            <h1 className="mb-3 font-preahvihear text-3xl font-bold">CocktailsDB</h1>
          </div>
        </div>
      </Container>
    </main>
  );
}
