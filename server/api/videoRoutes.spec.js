// const expect = require('chai').expect;
// const request = require('supertest');

// const app = require('../server/app');
// const agent = request.agent(app);

// const db = require('../server/db');
// const Video = require('../server/models/videos');
// const Views = require('../server/models/views');

// describe('Articles Route:', () => {
//   before(() => {
//     return db.sync({ force: true });
//   });

//   afterEach(() => {
//     return Promise.all([
//       Article.truncate({ cascade: true }),
//       User.truncate({ cascade: true })
//     ]);
//   });

//   describe('GET /videos', () => {
//     it('responds with an array via JSON', async () => {
//       const res = await agent
//         .get('/articles')
//         .expect('Content-Type', /json/)
//         .expect(200);

//       // res.body is the JSON return object
//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body).to.have.length(0);
//     });

//     it('returns an article if there is one in the DB', async () => {
//       await Article.create({
//         title: 'Test Article',
//         content: 'Test body'
//       });

//       const res = await agent.get('/articles').expect(200);

//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body[0].content).to.equal('Test body');
//     });

//     it('returns another article if there is one in the DB', async () => {
//       await Article.create({
//         title: 'Test Article',
//         content: 'Test body'
//       });
//       await Article.create({
//         title: 'Another Test Article',
//         content: 'Another test body'
//       });

//       const res = await agent.get('/articles').expect(200);

//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body[0].content).to.equal('Test body');
//       expect(res.body[1].content).to.equal('Another test body');
//     });
//   });

//   describe('GET /videos/:id', () => {
//     let coolArticle;

//     beforeEach(async () => {
//       const creatingArticles = [
//         {
//           title: 'Boring article',
//           content: 'This article is boring'
//         },
//         {
//           title: 'Cool Article',
//           content: 'This article is cool'
//         },
//         {
//           title: 'Riveting Article',
//           content: 'This article is riveting'
//         }
//       ].map(data => Article.create(data));

//       const createdArticles = await Promise.all(creatingArticles);
//       coolArticle = createdArticles[1];
//     });

//     it('returns the JSON of the article based on the id', async () => {
//       const res = await agent.get('/articles/' + coolArticle.id).expect(200);

//       if (typeof res.body === 'string') {
//         res.body = JSON.parse(res.body);
//       }
//       expect(res.body.title).to.equal('Cool Article');
//     });

//     it('returns a 404 error if the ID is not correct', () => {
//       return agent.get('/articles/76142896').expect(404);
//     });
//   });

//   describe('POST /articles', () => {
//     it('creates a new article', async () => {
//       const res = await agent
//         .post('/articles')
//         .send({
//           title: 'Awesome POST-Created Article',
//           content: 'Can you believe I did this in a test?'
//         })
//         .expect(200);

//       expect(res.body.message).to.equal('Created successfully');
//       expect(res.body.article.id).to.not.be.an('undefined');
//       expect(res.body.article.title).to.equal('Awesome POST-Created Article');
//     });

//     it('does not create a new article without content', () => {
//       return agent
//         .post('/articles')
//         .send({
//           title: 'This Article Should Not Be Allowed'
//         })
//         .expect(500);
//     });

//     it('saves the article to the DB', async () => {
//       await agent
//         .post('/articles')
//         .send({
//           title: 'Awesome POST-Created Article',
//           content: 'Can you believe I did this in a test?'
//         })
//         .expect(200);

//       const foundArticle = await Article.findOne({
//         where: { title: 'Awesome POST-Created Article' }
//       });

//       expect(foundArticle).to.exist; // eslint-disable-line no-unused-expressions
//       expect(foundArticle.content).to.equal(
//         'Can you believe I did this in a test?'
//       );
//     });

//     it('sends back JSON of the actual created article, not just the POSTed data', async () => {
//       const res = await agent
//         .post('/articles')
//         .send({
//           title: 'Coconuts',
//           content: 'A full-sized coconut weighs about 1.44 kg (3.2 lb).',
//           extraneous: 'Sequelize will quietly ignore this non-schema property'
//         })
//         .expect(200);

//       expect(res.body.article.extraneous).to.be.an('undefined');
//       expect(res.body.article.createdAt).to.exist; // eslint-disable-line no-unused-expressions
//     });
//   });

//   describe('PUT /articles/:id', () => {
//     let article;

//     beforeEach(async () => {
//       article = await Article.create({
//         title: 'Final Article',
//         content: 'You can do it!'
//       });
//     });

//     it('updates an article', async () => {
//       const res = await agent
//         .put('/articles/' + article.id)
//         .send({
//           title: 'Awesome PUT-Updated Article'
//         })
//         .expect(200);

//       expect(res.body.message).to.equal('Updated successfully');
//       expect(res.body.article.id).to.not.be.an('undefined');
//       expect(res.body.article.title).to.equal('Awesome PUT-Updated Article');
//       expect(res.body.article.content).to.equal('You can do it!');
//     });

//     xit('saves updates to the DB', async () => {
//       await agent.put('/articles/' + article.id).send({
//         title: 'Awesome PUT-Updated Article'
//       });

//       const foundArticle = await Article.findById(article.id);

//       expect(foundArticle).to.exist; // eslint-disable-line no-unused-expressions
//       expect(foundArticle.title).to.equal('Awesome PUT-Updated Article');
//     });

//     xit('gets 500 for invalid update', () => {
//       return agent
//         .put('/articles/' + article.id)
//         .send({ title: '' })
//         .expect(500);
//     });
//   });
// });
