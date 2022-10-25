import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

import { Navbar } from '../../components/Navbar';


export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact</h1>
        <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  )
}
