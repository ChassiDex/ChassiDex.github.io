ChassiDex is a database of host organisms used in synthetic biology. Under each host organism, all the information a synthetic biologist would need to work with that organism such as Growth characteristics, Strain diversity, Culture sources, Maintenance protocols, Transformation protocol, BioBrick parts, Whole-cell metabolism models and commonly used vectors are listed. We also work on software tools to make working with different hosts easier.
- For more details, consider reading our preprint on [bioRxiv](https://www.biorxiv.org/content/10.1101/703033v1.full.pdf)
- To view the database and use the tools, go to [ChassiDex.org](https://chassidex.org)

# The code
The database entry for each organism is stored in the 'data' folder. Every organism has its markdown file with the data sections, and a brief header. A python script 'generator.py' is used to generate a static site using the markdown files. Jinja2 templates are used for the homepage listing all organisms, and the template page for each entry.

The python script needs to be run every time the data is updated. This requires the python modules Jinja2 (for templating) and mistune (for rendering markdown as .html)

# Deployment status
The static site is deployed using netlify.com under our custom domain chassidex.org. The tool is linked to the GitHub repository. It is also configured to run the python script and redeploy the site if any changes are made on our GitHub repo. Hence, any changes to the data contained in the markdown files will immediately reflect on our site.

# Wiki links
The idea of ChassiDex was conceived and presented as an iGEM project by Team IIT-Madras under the software track in 2017 and we are continued the work as a cross-track software project in 2018 though we were working on foundational advance. In 2019, we have added Whole-cell metabolism models for most of the organisms along with the addition of _*Fusarium solani*_.
- [2017 Wiki](http://2017.igem.org/Team:IIT-Madras)
- [2018 Wiki](http://2018.igem.org/Team:IIT-Madras)
- [2019 Wiki](http://2019.igem.org/Team:IIT-Madras)

# Contact Us
- igem@smail.iitm.ac.in
- hi@chassidex.org
