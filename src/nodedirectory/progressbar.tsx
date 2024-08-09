const ProgressBarComponent = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '4px' }}>
      <div style={{ width: '50%', backgroundColor: '#4caf50', padding: '4px', borderRadius: '4px' }}>
        50%
      </div>
    </div>
  );
};

ProgressBarComponent.metadata = {
  name: 'ProgressBarComponent',
  description: 'A progress bar showing 50% completion',
  type: 'UI',
  tags: ['progress', 'bar', 'indicator'],
};

export default ProgressBarComponent;

