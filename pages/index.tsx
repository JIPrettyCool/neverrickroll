import Search from '../components/search';
import Footer from '../components/footer';

const IndexPage = () => (
  <> 
  <div className="break-words text-gray-400 h-full">
    <title>
          Never Rick Roll
    </title>
    <h1 className="text-5xl pt-20 pr-20 pl-20 pb-10"> 
      <div className="flex flex-row justify-center pb-7">
          <a href="https://nextjs.org">
          <img src="https://www.electronicbeats.net/app/uploads/2016/06/rickastley.jpg" className="h-48 w-48 rounded-full"></img>
          </a>
      </div>
      <strong className="items-center">
            Use <div className="flex flex-row">Never&nbsp;<div className="text-indigo-600">Rick Roll</div></div> and <a>No More</a> <a className="text-indigo-600 flex flex-row">Rick Roll</a>{' '} again
      </strong>
    </h1>

    <Search />
    
    
    <div className="dark:text-white text-center">
    &copy; Made by
    <a href="https://github.com/JIPrettyCool" className="text-blue-500"> JI </a>
     and
    <a href="https://github.com/barbarbar338" className="text-blue-500"> barbarbar338</a>
    </div>

    <Footer />
  </div>

  
  </>
  
)

export default IndexPage
