import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  const years = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, index) => index + 1900);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      
      <div className="fixed bottom-5 right-5 max-w-xl p-4 bg-white shadow-lg rounded-lg w-[400px] overflow-y-scroll h-[400px]">
        <div className="text-xl font-semibold mb-4">簡単応募フォーム</div>
        <div className="space-y-4">
          <div>
            <div className="flex">
              <div className="w-[35px] h-[35px] rounded-full overflow-hidden mr-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon01.png" alt="kuma" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-gray-200 rounded-lg">
                あなたのお名前を教えてください。
              </div>
            </div>
            <div className="flex flex-row-reverse mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon02.png" alt="azarashi" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-blue-200 rounded-lg">
                <input type="text" className="bg-transparent" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon01.png" alt="kuma" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p>生年月日を教えてくれるー？</p>
              </div>
            </div>
            <div className="flex flex-row-reverse mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon02.png" alt="azarashi" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-blue-200 rounded-lg">
                <div className="mb-4 flex items-center">
                  <label className="inline text-gray-700 font-bold mr-2" htmlFor="year">
                    年:
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="inline w-full bg-transparent border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">何年生まれ？</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}年
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 flex items-center">
                  <label className="inline text-gray-700 font-bold mr-2" htmlFor="month">
                    月:
                  </label>
                  <select
                    id="month"
                    name="month"
                    className="inline w-full bg-transparent border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">何月に生まれ？</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}月
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="inline text-gray-700 font-bold mr-2" htmlFor="day">
                    日:
                  </label>
                  <select
                    id="day"
                    name="day"
                    className="inline w-full bg-transparent border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">何日生まれ？</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}日
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon01.png" alt="kuma" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p>メールアドレスを教えてください！</p>

              </div>
            </div>
            <div className="flex flex-row-reverse mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon02.png" alt="azarashi" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-blue-200 rounded-lg">
                <input type="text" className="bg-transparent" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon01.png" alt="kuma" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p>電話番号を教えてください</p>

              </div>
            </div>
            <div className="flex flex-row-reverse mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon02.png" alt="azarashi" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-blue-200 rounded-lg">
                <input type="text" className="bg-transparent" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon01.png" alt="kuma" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p>以下の内容で合ってますか？</p>
                <p>名前 : </p>
                <p>生年月日を : </p>
                <p>mail : </p>
                <p>電話番号 : </p>
              </div>
            </div>
            <div className="flex flex-row-reverse mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img src="https://anpanstyle.com/wp-content/uploads/2023/01/icon02.png" alt="azarashi" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-blue-200 rounded-lg flex items-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">はい！</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">いや！</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Home;