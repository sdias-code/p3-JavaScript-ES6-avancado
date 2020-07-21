const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect; 
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function(){
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(5, 5, (value) => {
            expect(value).to.equal(10);
            //assert.equal(value, 10);
            done();
            });            
        });

        it('Multiply two numbers', function(){            
            
            const obj = {
                name: 'Romario Souza'
            };

            const obj2 = {
                name: 'Romario Souza'
            };

            expect(obj).deep.equal(obj2);

            // expect(obj)
            // .to.have.property('name')
            // .equal('Romario Souza');

            const math = new Math();
            value = 5;
            //assert.equal((value, 5), 0);
            expect(math.multiply(value, 5)).to.equal(25);
        });

        it.only('Calls req with sum and index values', function(){
            const req = {};
            const res = {
                //load: sinon.spy()
                load: function load(){
                    console.log('Called!');
                }
            };

            // sinon.spy(res, 'load');
            sinon.stub(res, 'load').returns('xpto');

            const math = new Math();
            math.printSum(req, res, 5, 5);

            // expect(res.load.calledOnce).to.be.true;
            expect(res.load.args[0][0]).to.equal('index');
            // expect(res.load.args[0][1]).to.equal(10);
        })
    });