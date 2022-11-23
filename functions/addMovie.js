const {By} = require(`selenium-webdriver`)

const addMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys(`The Dark Knight`)

    await driver.findElement(By.xpath(`//button`)).click()

    const movie = await driver.findElement(By.xpath(`//li`))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const deleteMovie = async(driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys(`A New Hope`)

    await driver.findElement(By.xpath(`//button`)).click()

    await driver.findElement(By.xpath(`//button[contains(text(), "x")]`)).click()

    const ul = await driver.findElement(By.xpath(`//ul`))
    expect(ul.hasChildren).toBeFalsy()

}

const clickMovie = async(driver)=> {
     await driver.findElement(By.xpath(`//li`)).click()

     const alert = await driver.findElement(By.xpath(`//aside`))

     const displayed = alert.isDisplayed()
     expect(displayed).toBeTruthy()
    
}


module.exports = {
    addMovie,
    deleteMovie,
    clickMovie
}