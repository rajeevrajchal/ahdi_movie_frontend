import React, { useContext, useEffect, useState } from 'react';
import './home.scss';
import Layout from '../../../../hoc/layout';
import Schedule from './container/schedule';
import Movie from './container/movie';
import { getCurrentMovie } from './services/current_movie/currentMovieAction';
import { $FIXME } from '../../../../constants';
import { Context } from '../../../../context';
import DataLoader from '../../../../components/shared/dataLoader';
import { Adsense } from '@ctrl/react-adsense';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentMovies, setCurrentMovies] = useState<$FIXME>({
    poster:
      'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg',
    year: 0,
    like: 0,
    rating: 0,
    tomato_rating: 0,
    duration: 0,
    genres: [],
    language: 'en',
    name: 'Movie Name',
    schedule: [],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
  const { dispatch } = useContext(Context);
  const fetchData = async () => {
    setLoading(true);
    const res = await getCurrentMovie(dispatch);
    setCurrentMovies(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex-centered">
        <div className="vertical-center">
          <DataLoader />
        </div>
      </div>
    );
  } else {
    return (
      <Layout
        description={'Movie where you can enjoy your favourite shows.'}
        keywords={['movie', 'shows']}
        title={''}
      >
        <main className="home flex ">
          {/*<div*/}
          {/*  className="first-ads"*/}
          {/*  style={{*/}
          {/*    width: '200px',*/}
          {/*    background: 'white',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Adsense*/}
          {/*    client="ca-pub-4591861188995436"*/}
          {/*    slot="6710577704"*/}
          {/*    style={{*/}
          {/*      display: 'inline-block',*/}
          {/*      height: '100%',*/}
          {/*      width: '100%',*/}
          {/*      background: 'red',*/}
          {/*    }}*/}
          {/*    layout="in-article"*/}
          {/*    format="fluid"*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="main-content flex-1">
            {currentMovies ? (
              <>
                <Movie currentMovies={currentMovies} />
                <Schedule />
              </>
            ) : (
              <h3
                style={{ textAlign: 'center', color: 'white' }}
                className="mt-xl"
              >
                No Any Movie
              </h3>
            )}
          </div>
          <div
            className="second-ads"
            style={{
              marginTop: '100px',
              marginRight: '40px',
              width: '250px',
              height: '500px',
              background: 'white',
            }}
          >
            <Adsense
              client="ca-pub-4591861188995436"
              slot="6710577704"
              style={{
                display: 'inline-block',
                width: '250px',
                height: '500px',
                background: 'red',
              }}
              layout="in-article"
              format="fluid"
            />
          </div>
        </main>
      </Layout>
    );
  }
};

export default Home;
