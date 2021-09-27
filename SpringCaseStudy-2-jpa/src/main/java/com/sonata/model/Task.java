package com.sonata.model;

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Task {
	@Id
	private long taskId;
	private int ownerId;
	//private int creatorId;
	private String name;
	private String description;
	private String status;
	private String priority;
	private String notes;
	private String isBookmarked;
	private Date createdOn;
	private Date statusChangedOn;
	public long getTaskId() {
		return taskId;
	}
	public void setTaskId(long taskId) {
		this.taskId = taskId;
	}
	public int getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}
	/*public int getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(int creatorId) {
		this.creatorId = creatorId;
	}*/
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getIsBookmarked() {
		return isBookmarked;
	}
	public void setIsBookmarked(String isBookmarked) {
		this.isBookmarked = isBookmarked;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Date getStatusChangedOn() {
		return statusChangedOn;
	}
	public void setStatusChangedOn(Date statusChangedOn) {
		this.statusChangedOn = statusChangedOn;
	}
	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", ownerId=" + ownerId + ",  name=" + name
				+ ", description=" + description + ", status=" + status + ", priority=" + priority + ", notes=" + notes
				+ ", isBookmarked=" + isBookmarked + ", createdOn=" + createdOn + ", statusChangedOn=" + statusChangedOn
				+ "]";
	}
	
	
	

}
