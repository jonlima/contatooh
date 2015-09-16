var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var config = require('./config.js')();

module.exports = function(){
    var Usuario = mongoose.model('Usuario');
    var githubCallback = 'http://' + config.domain + ':' + config.port + '/auth/github/callback';
    
    passport.use(new GitHubStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: githubCallback
        //callbackURL: "http://localhost:3000/auth/github/callback"
    }, function(accessToken, refreshToken, profile, done){
        Usuario.findOrCreate(
            { "login" : profile.username},
            { "nome" : profile.username},
            function(erro, usuario){
                if(erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));
    
    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });
    
    passport.deserializeUser(function(id, done){
        Usuario.findById(id).exec()
            .then(function(usuario){
                done(null, usuario);
            });
    });
    
};