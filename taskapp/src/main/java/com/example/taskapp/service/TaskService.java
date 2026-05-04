package com.example.taskapp.service;

import com.example.taskapp.model.Task;
import com.example.taskapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Create
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    // Read all
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Read by id
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    // Delete
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    // Update Task
    public Task updateTask(Long id, Task updatedTask) {
        Task existing = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setCompleted(updatedTask.isCompleted());

        return taskRepository.save(existing);
    }
}