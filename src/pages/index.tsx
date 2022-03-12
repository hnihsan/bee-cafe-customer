import Img from '@components/Img/Img';
import React, { useState } from 'react';

import formatRupiah from '@helpers/formatRupiah';
import ConfirmQtyModal from '@components/Modal/ConfirmQtyModal';
import Receipt from '@parts/Receipt';
type Props = {};

export default function Home({}: Props) {
  const [selectedCurrentIndex, setSelectedCurrentIndex] = useState(0);
  const datas = [
    {
      category: 'coffee',
      items: [
        {
          name: 'Expresso',
          price: '7000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Double Expresso',
          price: '10000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Cappacino',
          price: '8000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Latte',
          price: '8000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Americano',
          price: '5000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Mocha',
          price: '8000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Flat White',
          price: '3000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Short Black',
          price: '3000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Long Black',
          price: '3000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      ],
    },
    {
      category: 'teas',
      items: [
        {
          name: 'White',
          price: '2000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Green',
          price: '2000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Black',
          price: '3000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Oolong',
          price: '4000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          name: 'Puer',
          price: '3000',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      ],
    },
    {
      category: 'bakery',
      items: [],
    },
    {
      category: 'sandwiches',
      items: [],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  const handleConfirmItem = (item: any) => {
    const isExist = orders.filter((order) => {
      return order.item.name === item.item.name;
    }).length;

    if (isExist) {
      const index = orders.findIndex(
        (order) => order.item.name === item.item.name
      );

      orders[index].qty = item.qty;
    } else {
      setOrders((oldOrders) => [...oldOrders, item]);
    }
  };

  return (
    <div>
      <div className="container bg-white shadow rounded-lg mt-16  p-8 flex gap-x-5">
        <aside className="w-2/12 overflow-auto " style={{ maxHeight: '70vh' }}>
          <ul className="list-none">
            {datas.map(({ category }, index) => (
              <li
                key={index}
                className={`p-3 first-letter:uppercase  cursor-pointer hover:text-red-100 transition-all duration-75 ${
                  selectedCurrentIndex === index
                    ? 'border rounded bg-gray-500 text-white hover:text-white'
                    : ''
                }`}
                onClick={() => setSelectedCurrentIndex(index)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>
        <div
          className="w-10/12  overflow-auto p-4 border-l"
          style={{ maxHeight: '70vh', height: '70vh' }}
        >
          <div className="grid grid-cols-4 gap-4">
            {datas[selectedCurrentIndex]?.items?.length > 0 ? (
              datas[selectedCurrentIndex].items.map((item, index) => (
                <div
                  className="border rounded-md cursor-pointer hover:shadow-md relative"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsModalOpen(true);
                  }}
                  key={index}
                >
                  <figure className="bg-white rounded-md">
                    <div className="relative">
                      {orders.filter((order) => order.item.name === item.name)
                        .length > 0 && (
                        <div className="absolute w-10 h-10 z-10">
                          <Img
                            src="/images/icon-checklist.png"
                            height="100%"
                            width="100%"
                            alt={item?.name ?? '-'}
                            classname="object-cover rounded-tl-md rounded-tr-md"
                          />
                        </div>
                      )}

                      <Img
                        src={item?.image}
                        height="100%"
                        width="100%"
                        alt={item?.name ?? '-'}
                        classname="object-cover rounded-tl-md rounded-tr-md"
                      />

                      <div className="meta">
                        <p className="mt-3 px-3 text-xl text-white">
                          IDR {formatRupiah(item?.price ?? 0)}
                        </p>
                      </div>
                    </div>

                    <figcaption className="p-4 text-black text-center">
                      <h2 className="text-gray-900 text-center text-sm">
                        {item?.name ?? '-'}
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              ))
            ) : (
              <h2>Sorry, no item available</h2>
            )}
          </div>
        </div>
      </div>

      {selectedItem && (
        <ConfirmQtyModal
          orders={orders}
          data={selectedItem}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={(payload) => {
            handleConfirmItem(payload);
          }}
          shouldCloseOnOverlayClick={true}
        />
      )}

      {orders.length > 0 && <Receipt orders={orders} />}
    </div>
  );
}
