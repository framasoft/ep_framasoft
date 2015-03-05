# Ep_framasoft

Add framasoft navbar to Etherpad

We use https://git.framasoft.org/framasoft/framanav.git$ as subtree in git, so some things are a little tricky.

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
