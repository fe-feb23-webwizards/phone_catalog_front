import React from 'react';
import { PhoneFromAPI } from '../../types/PhonesResponse';
import './TechSpecs.scss';

type Props = {
  product: PhoneFromAPI;
};

export const TechSpecs: React.FC<Props> = ({ product }) => {
  return (
    <div className="TechSpecs">
      <h2 className="TechSpecs__header">
        Tech specs
      </h2>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Screen</p>
        <p className="TechSpecs__textValue">
          {product.screen}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Resolution</p>
        <p className="TechSpecs__textValue">
          {product.resolution}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Processor</p>
        <p className="TechSpecs__textValue">
          {product.processor}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">RAM</p>
        <p className="TechSpecs__textValue">
          {product.ram}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Built in memory</p>
        <p className="TechSpecs__textValue">
          {product.capacity}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Camera</p>
        <p className="TechSpecs__textValue">
          {product.camera}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Zoom</p>
        <p className="TechSpecs__textValue">
          {product.zoom}
        </p>
      </div>

      <div className="TechSpecs__sect">
        <p className="TechSpecs__textChar">Cell</p>
        <p className="TechSpecs__textValue">
          {product.cell.map((el, i) => (i ? `, ${el}` : el))}
        </p>
      </div>
    </div>
  );
};
