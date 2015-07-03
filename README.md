[![](https://git.framasoft.org/assets/logo-black-f52905a40830b30aa287f784b537c823.png)](https://git.framasoft.org)

![English:](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/20px-Flag_of_the_United_Kingdom.svg.png) **Framasoft uses GitLab** for the development of its free softwares. Our Github repositories are only mirrors.
If you want to work with us, **fork us on [git.framasoft.org](https://git.framasoft.org)**. (no registration needed, you can sign in with your Github account)

![Français :](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/20px-Flag_of_France.svg.png) **Framasoft utilise GitLab** pour le développement de ses logiciels libres. Nos dépôts Github ne sont que des mirroirs.
Si vous souhaitez travailler avec nous, **forkez-nous sur [git.framasoft.org](https://git.framasoft.org)**. (l'inscription n'est pas nécessaire, vous pouvez vous connecter avec votre compte Github)
* * *

# Ep_framasoft

Add framasoft navbar to Etherpad

We use https://git.framasoft.org/framasoft/framanav.git as subtree in git, so some things are a little tricky.

See [this post](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/) about `git subtree`.

## Add navbar repo as remote

```
git remote add -f framanav https://git.framasoft.org/framasoft/framanav.git
```

## Navbar update

```
git subtree pull --prefix static/nav framanav master --squash
```

## Push navbar changes

```
# export some variables to have a proper commit
export GIT_AUTHOR_NAME="Foo Bar" GIT_AUTHOR_EMAIL="foo.bar@baz.org"
export GIT_COMMITTER_NAME=$GIT_AUTHOR_NAME GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL

# push
git subtree push --prefix=static/nav framanav master
```

Don't forget to push the modifications in ep_framasoft repo too!