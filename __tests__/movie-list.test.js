const {Builder, Capabilities} = require('selenium-webdriver')

require(`chromedriver`)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, deleteMovie, clickMovie} = require(`../functions/addMovie`)

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test(`Delete a movie`,  async () => {
    await deleteMovie(driver)

     await driver.sleep(3000)
})

test(`Add a movie`,  async () => {
    await addMovie(driver)

     await driver.sleep(3000)
})


test(`Click a movie`,  async () => {
    await clickMovie(driver)

     await driver.sleep(3000)
})