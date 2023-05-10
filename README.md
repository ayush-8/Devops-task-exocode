# Devops Task
The Yaml file included deploys a node.js server on a slave node using Ansible.
## Ansible 
Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality.
Now, Ansible though easy deployment tool, still requires human intelligence to manage th e deployment.
Here's a short tutorial to deploy Backend and Frontend Node.js servers on a managed node through ansible.
### Step 1
Launching Instances of Redhat (just becuase ansible is Redhat's product - not that it can't be installed on any other linux). Many instances could be installed but I have used 2 here. 1 for Controller and 1 for managed node.
[Use free-tier, it's available]
### Step 2
Installing `net-tools`, `python`, `ansible` and `vim` in the controller node.
### Step 3
Build a config file in:

`/etc/ansible/ansible.cfg`
with contents:

`[defaults]`\
`inventory = /home/ec2-user/ayush/ansible/inventory`\
`remote_user = admin`\
`ask_pass = false`\
`host_key_checking = false`\

`[privilege_escalation]`\
`become = true`\
`become_method = sudo`\
`become_user = root`\
`become_ask_pass = false`\

### Step 4
Write inventory- In my case it only contained:

`[all:vars]
ansible_ssh_private_key_file=./ansible.pem`

`[all]
43.204.25.115    ansible_connection=ssh        ansible_user=ec2-user`

### Step 5
Then writing the playbook- the code for which is included in the repository.

### Step 6
Finally, executing the playbook by the command:\
`ansible-playbook playbook.yml`\
and Successfully Acheiving the goal.
