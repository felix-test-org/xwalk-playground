import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  const singleSku = config['single-sku'];
  const manySku = config['multi-sku'];
  const singleCategory = config['single-category'];
  // eslint-disable-next-line prefer-destructuring
  const anything = config.anything;

  block.innerHTML = `
    <p>Single SKU: ${singleSku}</p>
    <p>Many SKU: ${manySku}</p>
    <p>Single Category: ${singleCategory}</p>
    <p>Anything: ${anything}</p>
  `;
}
