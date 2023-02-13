## 👋 **Welcome to CyberFilm AI project**

This repository is dedicate to the project for the period of the openai Hackathon.

I presume that git is installed on your system. If not, start by [git download and installation](https://git-scm.com/downloads)


## **Before moving on**

1. **Accept the invitation to collaborate on the CyberFilm AI** 
    
    - Once connected to your github account, 
    - Click on your profile icon, 
      
    ![Untitled](https://res.cloudinary.com/delilah/image/upload/v1675559582/github/github-invitation1.png)

    - Then organization,

    ![Untitled](https://res.cloudinary.com/delilah/image/upload/v1675560172/github/github-accept1.png)

    - Accept the invitation.

    ![Untitled](https://res.cloudinary.com/delilah/image/upload/v1675560578/github/github-accept2.png)


2. **Clone the repository to a local directory on your machine** 
    - Open the terminal.
    - Change the current working directory to the location where you want the cloned directory to be made.
    - Type the following command:
    
        git clone https://github.com/dalila-taleb/CyberFilm-AI
    


3. **Link your local cloned repository to our remote one on the github**
    
    
        cd CyberFilm-AI
        git remote add origin git@github.com:dalila-taleb/CyberFilm-AI.git
    


4. **The main branch**  
Our repository on github is setting up on the branch main, be sure to do the same thing on the local once, otherwise, once you push your code, a second branch "Master" will be created on CyberFilm-AI.git. Just execute this code : 
    
    
        git branch -M main
    


## 🚀 **Now you're ready to Rock!**


1. **Your directory**  

When creating pieces of code, about stablediffusion, gpt3 or any thing related to our project, be careful to :

    - Do it in the directory dedicated to you CyberFilm-AI\[YourName]

2. **Work environement, if using python**

If your created a virtualenv, using venv or virtualenv, it will be great to name it env or the_env, because i already added this two names to the .gitignore file, so they will be ignored during the push. But if you decide to use another name for your virtualenv, please add this name to gitignore file.

3. **How to update CyberFilm-AI.git**

Once you do fell ready to share your code with us, just use this lines of code to push your changes to our remote repository on github :

    
        git add --all
        git commit -m "Use a pertinent message here. This will help us to know why this commit is done, to add new feature, to fixe an issu..."
        git push origin master
    

4. **How to update your local CyberFilm-AI**

To keep your local directory "CyberFilm-AI" updated with changes made by other members on the remote one, don´t hesitate to use the next code from time to time, or when some of us notifies the group that he made a change to the repository. 

    
        git pull origin main
    


## **Utils**


Every time, you push a new snipets, it will be greate to integrate two helpful files :
    
    - README.md : To present your code
    - requirements.txt : To list the libraries we should install in our environment, to make the code working.



## 🤚**_tutorials**


We are here, to collaborate, to work together and to learn together. This is why, we will put tutorials and share links of good tutos in the _tutorials directory. 