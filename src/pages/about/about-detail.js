/** Libs */

import { useFetcher } from "hooks/fetcher";
import { useParams } from "react-router-dom"

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function AboutDetail() {
  // State

  // Hooks
  const params = useParams();
  const UserId = params?.id;
  const { data, isLoading } = useFetcher({ path: `users/${UserId}` });

  // Func

  // Use Effect

  return (
    <section className='sc-AboutDetail'>
      <h1>About detail</h1>

      {
        isLoading ?
          <div>
            <p>LOADING...</p>
          </div>
          :
          <div>
            <div>
              <img src={data?.data?.avatar} />
            </div>
            <h3>{data?.data?.first_name} {data?.data?.last_name}</h3>
            <p>{data?.data?.email}</p>
          </div>
      }
    </section>
  )
}