+++
title = "Un medieval excepcional"
date = "2015-08-03T13:39:46+02:00"
description = "This is meta description for blog page"
tags = ["hugo"]
categories = ["pseudo"]
image = "images/blog/blog-medieval.jpg"
+++


La XXVI edición del Festival Medieval «Villa de Alburquerque» ha culminado con exitoso y extraordinario balance. Así nos lo confirmaba en la noche de ayer su directora, Ángela Robles, que quiso aprovechar la ocasión para expresar un agradecimiento general «al pueblo de Alburquerque» por su implicación con la fiesta. Ángela mostró la satisfacción de la organización con todos los actos; «han salido como los teníamos preparados». Al mismo tiempo tuvo una mención de gratitud especial hacia los trabajadores municipales y los coordinadores; «hacen un trabajo fantástico».

##Un amplio programa

La directora del festival también dijo que se había creído conveniente extender el programa a 4 días para aprovechar todo el trabajo previo de meses atrás, ya que como ella mismo expresó, «la gente está dispuesta». En este sentido comentó que el festival se va modificando «en base a lo que quiere la gente que coordina, lo que hacemos es dejarnos llevar». Terminó destacando que la mayor amplitud del paseo de Las Laderas tras las obras ha sido «fantástico, nos beneficia muchísimo».

El viaje en el tiempo comenzó el jueves con la obra Juana de Avis, montaje que pondrá el broche final hoy a las 23:00h. El viernes se registró bastante afluencia a medida que el sol abrasador comenzaba a retirarse y anoche fue el momento de mayor expectación en torno a los actos nocturnos de un programa en el que este año ha tenido un papel destacado la música y el teatro. Desde aquí queremos dar nuestra más sincera enhorabuena a todos los que de alguna u otra forma han aportado su trabajo y sobre todo, su ilusión para convertir ese evento en un referente a lo largo de sus 26 años de vida.


## Step 1. Install Hugo

Goto [hugo releases](https://github.com/spf13/hugo/releases) and download the
appropriate version for your os and architecture.

Save it somewhere specific as we will be using it in the next step.

More complete instructions are available at [installing hugo](/overview/installing/)

## Step 2. Build the Docs

Hugo has its own example site which happens to also be the documentation site
you are reading right now.

Follow the following steps:

 1. Clone the [hugo repository](http://github.com/spf13/hugo)
 2. Go into the repo
 3. Run hugo in server mode and build the docs
 4. Open your browser to http://localhost:1313

Corresponding pseudo commands:

    git clone https://github.com/spf13/hugo
    cd hugo
    /path/to/where/you/installed/hugo server --source=./docs
    > 29 pages created
    > 0 tags index created
    > in 27 ms
    > Web Server is available at http://localhost:1313
    > Press ctrl+c to stop

Once you've gotten here, follow along the rest of this page on your local build.

## Step 3. Change the docs site

Stop the Hugo process by hitting ctrl+c.

Now we are going to run hugo again, but this time with hugo in watch mode.

    /path/to/hugo/from/step/1/hugo server --source=./docs --watch
    > 29 pages created
    > 0 tags index created
    > in 27 ms
    > Web Server is available at http://localhost:1313
    > Watching for changes in /Users/spf13/Code/hugo/docs/content
    > Press ctrl+c to stop


Open your [favorite editor](http://vim.spf13.com) and change one of the source
content pages. How about changing this very file to *fix the typo*. How about changing this very file to *fix the typo*.

Content files are found in `docs/content/`. Unless otherwise specified, files
are located at the same relative location as the url, in our case
`docs/content/overview/quickstart.md`.

Change and save this file.. Notice what happened in your terminal.

    > Change detected, rebuilding site

    > 29 pages created
    > 0 tags index created
    > in 26 ms

Refresh the browser and observe that the typo is now fixed.

Notice how quick that was. Try to refresh the site before it's finished building.. I double dare you.
Having nearly instant feedback enables you to have your creativity flow without waiting for long builds.


