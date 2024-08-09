const CardComponent = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>Card Title</h3>
      <p>This is a card component with a title and description.</p>
    </div>
  );
};

CardComponent.metadata = {
  name: 'CardComponent',
  description: 'A card with a title and description',
  type: 'UI',
  tags: ['card', 'content', 'box'],
};

export default CardComponent;

