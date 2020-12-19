import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RepoLink from './repoContext.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 55

    },
    myinput: {
        margin: "0 auto",
        marginTop: "100px",
        width: "300px"
    },
    inputclass: {
        width: "130%"
    }
}));

export default function FullWidthGrid() {
    let [ownerName, setOwner] = useState("");
    let link = useContext(RepoLink);
    let [repolink, setRepoLink] = useState(link);
    const classes = useStyles();
    let [repos, setRepos] = useState([{}]);

    useEffect(() => {

        getRepo();


    }, []);
    async function getRepo() {
        const repo_data = await fetch('https://api.github.com/users/' + repolink + '/repos').then(res => res.json());
        if (repo_data.message === "Not Found") {
            alert("User Not Found");
        }
        else
            if (repo_data.length === 0) {
                alert("This user has no respository");
            } else {
                //console.log(repo_data);
                setRepos(repo_data);
                setOwner(repo_data[0].owner.login);
                // console.log(repo_data.length);
            }

    }

    function openwin(ind) {
        var win = window.open(repos[ind].html_url, '_blank');
        win.focus();
        //    console.log(repos[0].owner.login);
    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}><h3>Name: {ownerName}{ }</h3></Paper>
            <div className={classes.myinput}>
                <TextField id="standard-basic" placeholder="e.g haris-nabeel from github.com/haris-nabeel"
                    label="Enter Github User Name" className={classes.inputclass} onChange={eve => { setRepoLink(eve.target.value) }} /><br /><br />
                <Button variant="contained" color="primary" className={classes.inputclass} onClick={getRepo} >
                    Get my Respositories
                </Button>
                <br /><br />
            </div>

            <Grid container spacing={3}>
                {repos.map((repoObj, ind) => {
                    return (

                        <Grid item xs={12} sm={6} elevation={3} key={ind}>
                            <Paper className={classes.paper}><h3>{repoObj.name}</h3><br /><br /><br /><Button variant="outlined" color="secondary" onClick={eve => openwin(ind)} key={ind}>
                                Open this Respository..
                        </Button></Paper>

                        </Grid>




                    )
                })}

            </Grid>
        </div>
    );
}
