import { FunctionComponent, useEffect, useState } from "react";

import { Card } from "@poc/components";

interface Capybara {
  url: string;
  index: number;
  width: number;
  height: number;
  alt: string;
}

// https://capy.lol/#documentation
const Capybaras: FunctionComponent = () => {
  const [capybaras, setCapybaras] = useState<Capybara[]>([]);
  useEffect(() => {
    const fetchCapybaras = async () => {
      const offset = Math.floor(Math.random() * 50);
      const response = await fetch(
        `https://api.capy.lol/v1/capybaras?take=12&from=${offset}`
      );
      const result = await response.json();
      setCapybaras(result.data);
    };

    fetchCapybaras().catch(console.error);
  }, []);

  return (
    <section className="container">
      <h1>Capybaras</h1>
      <div className="row">
        {capybaras.map(({ url, alt }, index) => (
          <div className="col-3 mb-3" key={index}>
            <Card
              imgSrc={url}
              imgAlt="Capybara"
              description={alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capybaras;
