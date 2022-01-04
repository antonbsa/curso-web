import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

export default function ClientByCode() {
  const router = useRouter();
  return (
    <Layout title="Dynamic nvigation">
      <span> Code = {router.query.filial} - {router.query.code}</span>
    </Layout>
  )
}