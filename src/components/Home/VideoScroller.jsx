import React, { useRef } from 'react';

const videos = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_d34f3eb9-e506-4b97-87a1-772025971c81.mp4?v=1707301633',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
     "https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_4dca1a31-4d17-444b-8a23-1a651bec723b.mp4?v=1706876942",
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_b0633359-df0e-40d6-a322-aa2149d57ee2.mp4?v=1707305990",
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_4ee3bd8d-a0bb-42a0-ad26-58dc13d7357b.mp4?v=1706876788",
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_d34f3eb9-e506-4b97-87a1-772025971c81.mp4?v=1707301633',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_d34f3eb9-e506-4b97-87a1-772025971c81.mp4?v=1707301633',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_d34f3eb9-e506-4b97-87a1-772025971c81.mp4?v=1707301633',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0095/8500/0511/files/whatmore_tn_d34f3eb9-e506-4b97-87a1-772025971c81.mp4?v=1707301633',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

function VideoScroller() {

  return (
    <div className='w-full h-auto mt-20'>
      <h1 className='w-full uppercase font-["UntitledTTF"] text-2xl text-center'>
        VIEW & VOGUE
      </h1>
      <div className='mt-10 mx-10 h-auto relative overflow-hidden '>
        <div
          className='flex overflow-x-auto hide-scrollbar'
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className='w-full lg:w-[1/6] h-[70%] bg-white rounded-lg rounded-t-xl mx-2'
              style={{ minWidth: '250px' }}
            >
              <video
                autoPlay
                muted
                loop
                src={video.imageSrc}
                alt={video.imageAlt}
                className='object-cover h-full w-full rounded-lg'
              />
              <div className='p-4'>
                <h3 className='text-sm font-medium text-gray-700'>{video.name}</h3>
                <p className='text-sm text-gray-500'>{video.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoScroller;
