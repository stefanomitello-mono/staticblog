import axios from 'axios';
import React from 'react'

import { useEffect, useState } from 'react'

import Header from '../src/UI/organisms/Header';
import Footer from '../src/UI/organisms/Footer';
import { Data } from '../src/models/data';


function Page() {



  const [data, setData] = useState<Data>();

  useEffect(() => {
    axios.get<Data>('/data.json')
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <p>Test</p>
      <Header titleSite={data?.site.name!} urlSite={data?.site.baseUri!} iconLogo={data?.site.icon} navItem={data?.navitems} />
      <Footer copyright={'copyright'} socials={[]} />
    </>
  )
}

export { Page }