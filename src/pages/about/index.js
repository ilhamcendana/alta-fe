/** Libs */

import { useFetcher } from "hooks/fetcher";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function About() {
  // State

  // Hooks
  const { aboutContent } = useSelector(state => state.about);

  const { data, isLoading } = useFetcher({ path: '/users' });
  // Func

  // Use Effect

  return (
    <main>
      ABOUT

      <div>
        <p>{aboutContent}</p>
      </div>

      <div className="mt-4">
        {!isLoading ?
          data?.data.map((item, i) => (
            <Link to={`/about/${item?.id}`}>
              <div key={i}>
                <h3>{item?.first_name} {item?.last_name}</h3>
              </div>
            </Link>
          ))
          :
          <div>
            <h1>
              Loading...
            </h1>
          </div>
        }
      </div>
    </main>
  )

}