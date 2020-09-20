const puppeteer = require('puppeteer');
const timeout = 60000;

const URL = 'file:///Users/antoine/Desktop/Perso/CoursGit/React/semaine1_2_3_fondamentaux/part6_avancees/part3_tests/part1/Exercices/Inscription/index.html';

// Si vous voulez que le navigateur soit lancé
const browserConfig = {
  headless: false,
  slowMo: 80,
  args: ['window-size=1920, 1080']
};

describe("Test formulaire d'inscription", () => {

  test('Check last user', async () => {
 
  }, timeout);

  test('Add new user', async () => {
   
  }, timeout);

  test("Error empty field 1/3", async () => {
    
  }, timeout);

  test("Error empty field 2/3", async () => {
   
  }, timeout);

  test("Error empty field 3/3", async () => {
  
  }, timeout);

  test("Same user", async () => {
  
  }, timeout);

})