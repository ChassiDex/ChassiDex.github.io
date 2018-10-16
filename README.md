ChassiDex is a database of host organisms used in synthetic biology. Under each host organism, all the information a synthetic biologist would need to work with that organism is listed. We also work on software tools to make working with different hosts easier. Hosted at https://chassidex.org

# The code 
The database entry for each organism is stored in the 'data' folder. Every organism has its markdown file with the data sections, and a brief header. A python script 'generator.py' is used to generate a static site using the markdown files. Jinja2 templates are used for the homepage listing all organisms, and the template page for each individual entry. 

The python script needs to be run every time the data is updated. This requires the python modules Jinja2 (for templating) and mistune (for rendering markdown as html) 

# Deployment status
The static site is deployed using netlify.com under our custom domain chassidex.org. The tool is linked to the GitHub repository. It is also configured to run the python script and redeploy the site if any changes are made on our GitHub repo. Hence, any changes on the data contained in the markdown files will immediately reflect on our site.

# Wiki links
ChassiDex started out as an iGEM project by Team IIT-Madras under the software track in 2017 and we are continuing the work as a cross track software project in 2018 though we are working on foundational advance.
- 2017 wiki: http://2017.igem.org/Team:IIT-Madras
- 2018 wiki: http://2018.igem.org/Team:IIT-Madras

# Contact Us
- igem@smail.iitm.ac.in
- hi@chassidex.org
