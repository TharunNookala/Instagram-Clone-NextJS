import React from 'react'
import Footer from '../Footer/Footer'
import AsideBar from '../AsideBar/AsideBar'
import StoriesSection from '../StoriesSection/StoriesSection'
import Post from '../Post/Post'

const AppLayout = () => {
    return (
        <div className='min-h-full flex flex-col p-1 '>
            <div className='flex justify-center gap-2 h-full pl-32'>
                <div className='lg:w-[50%] w-full py-7 pl-32 lg:pl-64 pr-5 2xl:pl-64 flex flex-col'>
                    <div className='py-1'>
                        <StoriesSection />
                    </div>
                    <div className='p-5'>
                        {
                            new Array(5).fill(0).map((val, i) => (
                                <Post key={i} postIndex={i} />
                            ))
                        }
                        <div className='bg-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempora molestiae molestias dolorum excepturi corporis accusantium illo hic impedit laudantium aut assumenda laborum, non eum, fuga dolorem deserunt eligendi vitae soluta minus voluptates distinctio laboriosam ratione! Fuga veritatis hic commodi amet, vel quaerat natus, iure fugit rerum et mollitia? Facilis neque accusantium delectus, deserunt amet reprehenderit quidem ducimus laboriosam minima, voluptatem optio id illo architecto ullam debitis voluptatum blanditiis magni? Perspiciatis sapiente explicabo asperiores, soluta facere accusantium pariatur ullam dolor harum dicta aliquid non. Accusantium, ea. Tempora neque illo repellendus mollitia vero maxime dicta vitae. Veniam a ad voluptate repellat quod tenetur consequatur nemo laboriosam, inventore dolore dignissimos voluptas est, corporis mollitia hic temporibus eum porro in saepe minima enim fugit? Iusto voluptatem qui nulla fugiat aliquid ratione debitis ullam minus voluptate dolorem officiis repudiandae praesentium, distinctio sapiente, voluptatibus soluta quisquam vitae tempora. Libero dolor corporis expedita ullam quia explicabo deleniti molestias, sit voluptates, eos quos voluptatibus mollitia soluta alias eaque vero tenetur aperiam? Est, quo esse at cum magnam necessitatibus repudiandae porro iusto, unde officiis earum suscipit quibusdam sed possimus, aliquam cupiditate adipisci accusamus. Amet itaque optio fuga praesentium quia veritatis sed, voluptas quae nam eligendi consequuntur dolorem quam?</div>
                        <div className='bg-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempora molestiae molestias dolorum excepturi corporis accusantium illo hic impedit laudantium aut assumenda laborum, non eum, fuga dolorem deserunt eligendi vitae soluta minus voluptates distinctio laboriosam ratione! Fuga veritatis hic commodi amet, vel quaerat natus, iure fugit rerum et mollitia? Facilis neque accusantium delectus, deserunt amet reprehenderit quidem ducimus laboriosam minima, voluptatem optio id illo architecto ullam debitis voluptatum blanditiis magni? Perspiciatis sapiente explicabo asperiores, soluta facere accusantium pariatur ullam dolor harum dicta aliquid non. Accusantium, ea. Tempora neque illo repellendus mollitia vero maxime dicta vitae. Veniam a ad voluptate repellat quod tenetur consequatur nemo laboriosam, inventore dolore dignissimos voluptas est, corporis mollitia hic temporibus eum porro in saepe minima enim fugit? Iusto voluptatem qui nulla fugiat aliquid ratione debitis ullam minus voluptate dolorem officiis repudiandae praesentium, distinctio sapiente, voluptatibus soluta quisquam vitae tempora. Libero dolor corporis expedita ullam quia explicabo deleniti molestias, sit voluptates, eos quos voluptatibus mollitia soluta alias eaque vero tenetur aperiam? Est, quo esse at cum magnam necessitatibus repudiandae porro iusto, unde officiis earum suscipit quibusdam sed possimus, aliquam cupiditate adipisci accusamus. Amet itaque optio fuga praesentium quia veritatis sed, voluptas quae nam eligendi consequuntur dolorem quam?</div>
                    </div>
                </div>
                <div className='bg-blue-200 w-1/5 max-h-[400px] overflow-y-scroll hidden lg:block lg:mx-7 lg:mt-10'><AsideBar /></div>
            </div>
            <div className=''><Footer /></div>
        </div>
    )
}

export default AppLayout