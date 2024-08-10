import { useEffect } from 'react'
import Card from '../components/Card'
import { useFirebase } from '../context/firebase'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Dashboard = () => {
  const firebase = useFirebase();
  const isloggedin = firebase.isloggedin;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedin) {
      setTimeout(() => {
        navigate("/login");
      
      }, 1000);
    }
  }, [isloggedin, navigate]);

  const cardDetails = [
    {
      id: 'temp1',
      title: 'Template1',
      des: 'This template can be used for experienced and project based resume.',
      imageUrl: "../images/temp1.png",
    },
    {
      id: 'temp2',
      title: 'Template2',
      des: 'This template can be used for experienced and project-based resume.',
      imageUrl: "../images/temp2.png",
    },
  ];

  return (
    <div className='min-h-screen pt-32 w-full flex items-center justify-center bg-blue-950'>
      <div>
        <header className="bg-white w-full shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl pt-4 font-bold tracking-tight text-gray-900 text-center font-serif">WELCOME TO DASHBOARD</h1>
            <h5 className="text-2xl pt-4 tracking-tight text-gray-900 text-center font-serif">Choose a Template</h5>
          </div>
        </header>
        <main>
          <div className="grid grid-rows-2 grid-cols-2 bg-blue-950">
            {!isloggedin ? (
              <div className='flex justify-center items-center w-full h-64'>
                <Spinner animation="border" role="status" variant='light'>
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              cardDetails.map((cardDetail) => (
                <Card cardDetail={cardDetail} key={cardDetail.id} {...cardDetail} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
