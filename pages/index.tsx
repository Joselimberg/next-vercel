import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';


export default function HomePage() {
  return (
    <MainLayout>

      <h1>HomePage</h1>
      <h1 className={'title'}>
        {/* Ir a  <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
        <br />
        Ir a <Link href="/contact">Contact</Link>
        <br />
        Ir a <Link href="/pricing">Pricing</Link>
      </h1>
      
    </MainLayout>
  )
}
