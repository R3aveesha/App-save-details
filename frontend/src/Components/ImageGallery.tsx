function ImageGallery() {
  return (
    <div
      style={{
        backgroundColor: '#f3f4f6', // Light background
        width: '24rem',             // Width of 24 rem (384px)
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // Shadow
        borderRadius: '0.5rem',     // Rounded corners
        overflow: 'hidden',         // Clip the content to rounded corners
      }}
    >
      <figure style={{ margin: 0 }}>
        <img
          src=""
          alt="Shoes"
          style={{
            width: '100%',           // Full width of the container
            display: 'block',        // Block display for no inline spacing
          }}
        />
      </figure>
      <div
        style={{
          padding: '1rem',          // Padding of 1 rem (16px)
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',      // Font size of 1.5 rem (24px)
            fontWeight: 'bold',      // Bold font weight
            margin: '0 0 0.5rem 0',  // Margin below the title
          }}
        >
          Shoes!
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div
          style={{
            display: 'flex',        // Flex container for actions
            justifyContent: 'flex-end', // Align items to the end
          }}
        >
          <button
            style={{
              backgroundColor: '#2563eb', // Primary color background
              color: 'white',              // White text
              padding: '0.5rem 1rem',      // Padding of 0.5 rem (8px) vertical, 1 rem (16px) horizontal
              border: 'none',              // No border
              borderRadius: '0.25rem',     // Rounded corners
              cursor: 'pointer',           // Pointer cursor on hover
              fontSize: '1rem',            // Font size of 1 rem (16px)
              transition: 'background-color 0.2s', // Smooth transition for background color
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'} // Darker on hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}  // Revert to original
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
