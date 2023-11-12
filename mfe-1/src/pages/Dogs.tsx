import { FunctionComponent, useEffect, useState } from "react";

import { Card } from "@poc/components";

// https://dog.ceo/dog-api/documentation/
const Dogs: FunctionComponent = () => {
  const [dogs, setDogs] = useState<string[]>([]);
  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random/12"
      );
      const result = await response.json();
      setDogs(result.message);
    };

    fetchDogs().catch(console.error);
  }, []);

  return (
    <section className="container">
      <h1>Dogs</h1>
      <div className="row">
        {dogs.map((dog, index) => (
          <div className="col-3 mb-3" key={index}>
            <Card imgSrc={dog} imgAlt="Dog" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dogs;
